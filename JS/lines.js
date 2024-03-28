function drawLines(lines, type, redraw) {
    switch (type) {
        case 'wood':
            lines.forEach((line, index) => {
                if (redraw) {
                    if (index != lines.length - 1) {
                        createOneWoodLine(lines[index].x, lines[index].y, lines[index + 1].x, lines[index + 1].y, index, redraw);
                    }
                } else {
                    if (index == lines.length - 1) {
                        setTimeout(() => {
                            createOneWoodLine(lines[index].x, lines[index].y, lines[0].x, lines[0].y, index);
                        },
                            index * 500);
                    } else {
                        setTimeout(() => {
                            createOneWoodLine(lines[index].x, lines[index].y, lines[index + 1].x, lines[index + 1].y, index);
                        },
                            index * 500);
                    }
                }
            });
            break;
        case 'metal':
            lines.forEach((line, index) => {
                if (redraw) {
                    if (index != lines.length - 1) {
                        createOneMetalLine(lines[index].x, lines[index].y, lines[index + 1].x, lines[index + 1].y, index, redraw);
                    }
                } else {
                    if (index == lines.length - 1) {
                        setTimeout(() => {
                            createOneMetalLine(lines[index].x, lines[index].y, lines[0].x, lines[0].y, index);
                        },
                            index * 500);
                    } else {
                        setTimeout(() => {
                            createOneMetalLine(lines[index].x, lines[index].y, lines[index + 1].x, lines[index + 1].y, index);
                        },
                            index * 500);
                    }
                }
            })
    };
}

function getLinesDrawingPoints(treejsonarray) {
    let array = [];
    data = getPolesTrees(treejsonarray)['all'];
    data.forEach((element) => {

        x = startPointX + (element.x * pixelScale);
        y = startPointY - (element.y * pixelScale);

        let lowerLeft = getPolesTrees(treejsonarray)['lower_left'];
        let lowerRight = getPolesTrees(treejsonarray)['lower_right'];
        let upperLeft = getPolesTrees(treejsonarray)['upper_left'];
        let upperRight = getPolesTrees(treejsonarray)['upper_right'];

        if (lowerLeft.includes(element)) {
            x = x - 10;
        };
        if (lowerRight.includes(element)) {
            x = x + 10;
        };

        if (upperLeft.includes(element)) {
            x = x - 10;
            y = y - 20;
        };
        if (upperRight.includes(element)) {
            x = x + 10;
            y = y - 20;
        };

        if (upperRight.includes(element) && lowerRight.includes(element)) {
            x = startPointX + (element.x * pixelScale) + 10;
            y = startPointY - (element.y * pixelScale) - 10;
        };


        if (upperLeft.includes(element) && lowerLeft.includes(element)) {
            x = startPointX + (element.x * pixelScale) - 10;
            y = startPointY - (element.y * pixelScale) - 5;
        };
        array.push({ x, y });
    });

    return array;
};

function createOneWoodLine(x1, y1, x2, y2, id) {
    field.append("line")
        .attr("tree", 'tree_line')
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x1)
        .attr("y2", y1)
        .attr("stroke", "#7B3F00")
        .attr("stroke-width", 20)
        .attr("stroke-dasharray", "4")
        .transition()
        .duration(500)
        .attr("x2", x2)
        .attr("y2", y2)

    field.append("line")
        .attr("tree", 'tree_line')
        .attr("x1", x1)
        .attr("y1", y1 - 7)
        .attr("x2", x1)
        .attr("y2", y1 - 7)
        .attr("stroke", "#7B3F00")
        .attr("stroke-width", 4)
        .transition()
        .duration(500)
        .attr("x2", x2)
        .attr("y2", y2 - 7)

    field.append("line")
        .attr("tree", 'tree_line')
        .attr("x1", x1)
        .attr("y1", y1 + 7)
        .attr("x2", x1)
        .attr("y2", y1 + 7)
        .attr("stroke", "#7B3F00")
        .attr("stroke-width", 4)
        .transition()
        .duration(500)
        .attr("x2", x2)
        .attr("y2", y2 + 7)
};

function createOneMetalLine(x1, y1, x2, y2, redraw) {
    let lineOne = field.append("line")
        .attr("tree", 'tree_line')
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x1)
        .attr("y2", y1)
        .attr("stroke", "#71797E")
        .attr("stroke-width", 15)
        .attr("stroke-dasharray", "6");

    lineTwo = field.append("line")
        .attr("tree", 'tree_line')
        .attr("x1", x1)
        .attr("y1", y1 - 10)
        .attr("x2", x1)
        .attr("y2", y1 - 10)
        .attr("stroke", "#71797E")
        .attr("stroke-width", 6);

    lineThree = field.append("line")
        .attr("tree", 'tree_line')
        .attr("x1", x1)
        .attr("y1", y1 + 10)
        .attr("x2", x1)
        .attr("y2", y1 + 10)
        .attr("stroke", "#71797E")
        .attr("stroke-width", 6);

    if (typeof redraw !== 'undefined') {
        lineOne.transition()
            .duration(500)
            .attr("x2", x2)
            .attr("y2", y2);

        lineTwo.transition()
            .duration(500)
            .attr("x2", x2)
            .attr("y2", y2 - 10);

        lineThree.transition()
            .duration(500)
            .attr("x2", x2)
            .attr("y2", y2 + 10);

    } else {
        lineOne.attr("x2", x2)
            .attr("y2", y2);

        lineTwo.attr("x2", x2)
            .attr("y2", y2 - 10);

        lineThree.attr("x2", x2)
            .attr("y2", y2 + 10);
    }
};
