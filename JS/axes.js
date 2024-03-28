var margin = { top: 30, right: 30, bottom: 30, left: 30 },
  width = 1490 - margin.left - margin.right,
  height = 840 - margin.top - margin.bottom;

let svg = d3.select("#right-side-container")
  .append("svg")
  .attr("class", "svg-class")
  .attr("id", "svg-id")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

let field = svg.append('svg')
  .attr("id", "field_id")
  .attr("width", width)
  .attr("height", height)
  .attr("x", 0)
  .attr("y", 0);

field.append("defs")
  .append("pattern")
  .attr("id", "field_backgroundPattern")
  .attr("patternUnits", "userSpaceOnUse")
  .attr("width", 200)
  .attr("height", 200)
  .append("image")
  .attr("xlink:href", "../IMAGES/field.jpg")
  .attr("width", 200)
  .attr("height", 200)
  .attr("preserveAspectRatio", "none");

field.append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "url(#field_backgroundPattern)");


let x = d3.scaleLinear().domain([-1, 21]).range([0, width]);
svg.append("g")
  .attr("id", "x-id")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

let y = d3.scaleLinear().domain([-0.1, 12]).range([height, 0]);
svg.append("g")
  .attr("id", "y-id")
  .call(d3.axisLeft(y));
