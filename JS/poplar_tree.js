function drawPoplarTrees(trees) {
    var defs = field.append("defs");
    var gradient1 = defs.append("radialGradient")
        .attr("id", "poplarGradient")
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "50%")
        .attr("fx", "50%")
        .attr("fy", "100%");

    gradient1.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "darkgreen");

    gradient1.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "lightgreen");

    field.selectAll('ellipse')
        .data(trees)
        .enter().append("ellipse")
        .attr("rx", '20')
        .attr("ry", '50')
        .attr("cx", d => d.x)
        .attr("cy", d => d.y - 80)
        .attr('tree', 'tree_ellipse')
        .attr("style", "fill:url(#poplarGradient)");
}

function drawPoplarTreesAfterLines(trees, linesLength, fence_type, newLines) {
    setTimeout(() => {
        d3.select('#field_id').selectAll('[tree="tree_rect"]').remove();
        d3.select('#field_id').selectAll('[tree="tree_ellipse"]').remove();
        drawTrunkOfTrees(trees);
        drawPoplarTrees(trees);
        drawLines(newLines, fence_type, true);

        d3.select('#field_id').selectAll('[tree="tree_ellipse"]').remove();
        drawPoplarTrees(trees);
    },
        linesLength * 500
    );
}
