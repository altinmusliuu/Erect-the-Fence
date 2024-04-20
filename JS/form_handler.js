let form = d3.select("#data-form");

form.on("submit", function (event) {
    event.preventDefault();
    
    document.getElementById('invalid_format').classList.add("d-none");
    document.getElementById('invalid_value_x').classList.add("d-none");
    document.getElementById('invalid_value_y').classList.add("d-none");

    let inputData = d3.select("#data-input").property("value");
    let tree_type = d3.select('[name="tree_type"]:checked').property("value");
    let fence_type = d3.select('[name="fence_type"]:checked').property("value");

    let isValidFormat = validateInputFormat(inputData);
    if(!isValidFormat){
        document.getElementById('invalid_format').classList.remove("d-none");
        d3.select('#field_id').selectAll('[tree^="tree"]').remove();
    } else {
        let inputArray = JSON.parse(inputData);
        let uniqueArray = Array.from(new Set(inputArray.map(JSON.stringify)), JSON.parse);
    
        let treesJsonArray = uniqueArray.map(function (element) {
            let x = parseFloat(element[0]);
            let y = parseFloat(element[1]);
            return { x, y };
        });
        let isValidValues = validateInputValues(treesJsonArray);
        if(!isValidValues){
            document.getElementById('invalid_value_x').classList.remove("d-none");
            document.getElementById('invalid_value_y').classList.remove("d-none");

            d3.select('#field_id').selectAll('[tree^="tree"]').remove();
        } else {
            let lines = getLinesDrawingPoints(treesJsonArray);
            let trees = getDrawingPoints(treesJsonArray);
    
            let lowerLines = getLinesDrawingPoints(getOuterTrees(treesJsonArray)['lower']);
    
            trees.sort((element1, element2) => {
                if (element1.y === element2.y) return element1.x - element2.x;
                return element1.y - element2.y;
            });
    
            let fenceLength = calculateFenceLength(getDrawingPoints(getOuterTrees(treesJsonArray)['all']));
            d3.select('#perimeter').text('Minimum possible fence: ' + fenceLength);
            draw(trees, lines, tree_type, fence_type, lowerLines);
        }
    }
});

function validateInputValues(data) {
    return data.every((element) => {
        if (parseInt(element.x) < 0 || parseInt(element.x) > 20 || parseInt(element.y) < 0 || parseInt(element.y) > 10) {
            return false;
        }
        return true;

    });
}

function validateInputFormat(input) {
    let pattern = /^\s*\[\s*(?:\s*\[\s*[0-9]+\s*,\s*[0-9]+\s*\]\s*,?\s*)+\]\s*$/;

    return pattern.test(input);
}