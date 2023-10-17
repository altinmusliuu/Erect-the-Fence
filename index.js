// d3.select("h1").style("color","blue");

// const canvas = d3.select(".canva");

// const svg = canvas.append("svg").attr('width', "500").attr('height','200');

// svg.append("circle").attr('cx','50').attr('cy','50').attr('r',50);

var dataset = [
            {
             x1:10,
             y1:200,
             x2:20,
             y2:30
            },
            {
             x1:20,
             y1:30,
             x2:80,
             y2:80
            },
            {
             x1:80,
             y1:80,
             x2:10,
             y2:200
            }
        ];

var svg = d3.select('svg')
            .attr('width', 600)
            .attr('height', 600);

var lines = svg.selectAll('line')
    .data(dataset)
    .enter()
    .append('line')
    .attr('x1',function(d) {
        return d.x1;
    })
    .attr('x2',function(d) {
        return d.x2;
    })
    .attr('y1',function(d) {
        return d.y1;
    })
    .attr('y2',function(d) {
        return d.y2;
    })
    .attr('class', "black-stroke");


    // var tree = svg.selectAll('polygon')
    // .data(dataset)
    // .enter()
    // .append('rect')
    // .attr('points',function(d) {
    //     return d.x1 + '100,10 40,198 190,78 10,78 160,198';
    // })
    // .attr('width',20)
    // .attr('height',20)
    // .attr('class',"tree");

    var rect = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x',function(d) {
        return d.x1;
    })
    .attr('y',function(d) {
        return d.y1;
    })
    .attr('width',20)
    .attr('height',20)
    .attr('class',"rect");
