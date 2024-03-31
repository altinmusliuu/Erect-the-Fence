const startPointX = 67
const startPointY = 775;
const pixelScale = 65;
const treeRectWidth = 10;
const treeRectHeight = 40;

function draw(trees, lines, tree_type, fence_type, lowerLines) {
    d3.select('#field_id').selectAll('[tree^="tree"]').remove();
    d3.select("#solveButton").attr("disabled", true);
    drawTrunkOfTrees(trees);
    switch (tree_type) {
        case 'poplar':
            drawPoplarTrees(trees);
            drawLines(lines, fence_type);
            drawPoplarTreesAfterLines(trees, lines.length, fence_type, lowerLines);
            break;
            
        case 'apple':
            drawApplesTrees(trees);
            drawLines(lines, fence_type);
            drawApplesTreesAfterLines(trees, lines.length, fence_type, lowerLines);
            break;

        case 'pine':
            drawPineTrees(trees);
            drawLines(lines, fence_type);
            drawPineTreesAfterLines(trees, lines.length, fence_type, lowerLines);
            break;
        default:
    }
    
    setTimeout(() => {
        d3.select("#solveButton").attr("disabled", null);
    },
        lines.length * 500);
}


function getDrawingPoints(data) {
    let array = [];
    data.forEach((element) => {
        x = startPointX + (element.x * pixelScale);
        y = startPointY - (element.y * pixelScale);
        array.push({ x, y });
    });

    return array;
};



function calculateTotalDistance(coordinates) {
    let totalDistance = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
        const point1 = coordinates[i];
        const point2 = coordinates[i + 1];
        const distance = Math.sqrt(
            Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
        );
        totalDistance += distance;
    }
    totalDistance += Math.sqrt(Math.pow(coordinates[coordinates.length -1].x - coordinates[0].x, 2) + Math.pow(coordinates[coordinates.length -1].y - coordinates[0].y, 2));   
    return (totalDistance / pixelScale).toFixed(2);
}

function drawTrunkOfTrees(trees) {
    field.selectAll('[tree="tree_rect"]')
        .data(trees)
        .enter().append("rect")
        .attr("x", d => d.x - treeRectWidth / 2)
        .attr("y", d => d.y - treeRectHeight)
        .attr("width", treeRectWidth)
        .attr("height", treeRectHeight)
        .attr('tree', 'tree_rect')
        .attr("style", "fill:brown");
}
