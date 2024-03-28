function drawPineTrees(trees) {
    field.selectAll('polygon')
        .data(trees)
        .enter().append("polygon")
        .attr("points", d => drawPolygonTree(d))
        .attr('tree', 'tree_polygon')
        .attr("style", "fill:green;stroke:black;stroke-width:2;");
}

function drawPineTreesAfterLines(trees, linesLength, fence_type, newLines) {
    setTimeout(() => {
        d3.select('#field_id').selectAll('[tree="tree_rect"]').remove();
        d3.select('#field_id').selectAll('[tree="tree_polygon"]').remove();
        drawTrunkOfTrees(trees);
        drawPineTrees(trees);
        drawLines(newLines, fence_type, true);

        d3.select('#field_id').selectAll('[tree="tree_polygon"]').remove();
        drawPineTrees(trees);
    },
        linesLength * 500
    );
}

const treePolygon = {
    z: 10,
    x: { one: 10, two: 20, three: 30, four: 40 },
    y: { one: 30, two: 60, three: 90, four: 120 }
};
function drawPolygonTree(d) {
    return `
            ${d.x},${d.y - treePolygon.y.four}
            ${d.x - treePolygon.x.two},${d.y - treePolygon.y.three}
            ${d.x - treePolygon.x.one},  ${d.y - treePolygon.y.three}
            ${d.x - treePolygon.x.three}, ${d.y - treePolygon.y.two}
            ${d.x - treePolygon.x.two}, ${d.y - treePolygon.y.two}
            
            ${d.x - treePolygon.x.four}, ${d.y - treePolygon.y.one}
            ${d.x + treePolygon.x.four}, ${d.y - treePolygon.y.one}


            ${d.x + treePolygon.x.two}, ${d.y - treePolygon.y.two}
            ${d.x + treePolygon.x.three}, ${d.y - treePolygon.y.two}
            
            ${d.x + treePolygon.x.one}, ${d.y - treePolygon.y.three}
            ${d.x + treePolygon.x.two}, ${d.y - treePolygon.y.three}

            `
};
