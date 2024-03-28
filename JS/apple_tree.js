function drawApplesTreesAfterLines(trees, linesLength, fence_type, newLines) {
    setTimeout(() => {
        d3.select('#field_id').selectAll('[tree="tree_rect"]').remove();
        d3.select('#field_id').selectAll('[tree="tree_circle"]').remove();
        d3.select('#field_id').selectAll('[tree="tree_apple"]').remove();
        drawTrunkOfTrees(trees);
        drawApplesTrees(trees);
        drawLines(newLines, fence_type, true);

        d3.select('#field_id').selectAll('[tree="tree_circle"]').remove();
        d3.select('#field_id').selectAll('[tree="tree_apple"]').remove();
        drawApplesTrees(trees);
    },
        linesLength * 500
    );
}

function drawApplesTrees(trees) {
    var defs = field.append("defs");
    var gradient1 = defs.append("radialGradient")
        .attr("id", "appleGradient")
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "50%")
        .attr("fx", "50%")
        .attr("fy", "50%");

    gradient1.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "darkgreen");

    gradient1.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "green");

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '30')
        .attr("cx", d => d.x)
        .attr("cy", d => d.y - 65)
        .attr('tree', 'tree_circle')
        .attr("style", "fill:url(#appleGradient);")

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '25')
        .attr("cx", d => d.x - 20)
        .attr("cy", d => d.y - 75)
        .attr('tree', 'tree_circle')
        .attr("style", "fill:url(#appleGradient);");

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '25')
        .attr("cx", d => d.x + 20)
        .attr("cy", d => d.y - 75)
        .attr('tree', 'tree_circle')
        .attr("style", "fill:url(#appleGradient);");

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '20')
        .attr("cx", d => d.x)
        .attr("cy", d => d.y - 95)
        .attr('tree', 'tree_circle')
        .attr("style", "fill:url(#appleGradient);");



    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '5')
        .attr("cx", d => d.x)
        .attr("cy", d => d.y - 55)
        .attr('tree', 'tree_apple')
        .attr("style", "fill:red;stroke:darkred;stroke-width:2;");

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '5')
        .attr("cx", d => d.x - 35)
        .attr("cy", d => d.y - 75)
        .attr('tree', 'tree_apple')
        .attr("style", "fill:red;stroke:darkred;stroke-width:2;");

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '5')
        .attr("cx", d => d.x)
        .attr("cy", d => d.y - 95)
        .attr('tree', 'tree_apple')
        .attr("style", "fill:red;stroke:darkred;stroke-width:2;");

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '5')
        .attr("cx", d => d.x - 15)
        .attr("cy", d => d.y - 80)
        .attr('tree', 'tree_apple')
        .attr("style", "fill:red;stroke:darkred;stroke-width:2;");

    field.selectAll()
        .data(trees)
        .enter().append("circle")
        .attr("r", '5')
        .attr("cx", d => d.x + 30)
        .attr("cy", d => d.y - 75)
        .attr('tree', 'tree_apple')
        .attr("style", "fill:red;stroke:darkred;stroke-width:2;");
}
