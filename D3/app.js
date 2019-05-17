
//Set SVG Area
var svgWidth = 960;
var svgHeight = 500;

var margin = {
      top: 50,
      bottom: 100,
      right: 40,
      left: 60
    };
  
    var height = svgHeight - margin.top - margin.bottom;
    var width = svgWidth - margin.left - margin.right;
  
    // Append SVG element
    var svg = d3
      .select("#scatter")
      .append("svg")
      .attr("height", svgHeight)
      .attr("width", svgWidth);
  
    // Append group element
    var chartGroup = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load Demo Data

// d3.csv("data.csv", function(demoData) {
//     if (error) return console.warn(error);

d3.csv("data.csv").then(function(demoData) { 
    console.log(demoData);
    
    // Parse data and cast as numbers
    demoData.forEach(function(data) {
      data.income = +data.income;
      data.obesity = +data.obesity;
      console.log("income:", data.income);
      console.log("obesity:", data.obesity);
    });

// Scales
  var xLinScale = d3.scaleLinear()
    .domain([35000, d3.max(demoData, d => d.income)])
    .range([0, width]);
  var yLinScale = d3.scaleLinear()
    .domain([0, d3.max(demoData, d => d.obesity)+5])
    .range([height, 0]);

  var bottomAxis = d3.axisBottom(xLinScale);
  var leftAxis = d3.axisLeft(yLinScale);

  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g")
    .call(leftAxis);

  var circlesGroup = chartGroup.selectAll(".stateCircle")
    .data(demoData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinScale(d.income))
    .attr("cy", d => yLinScale(d.obesity))
    .attr("r", "10")
    .attr("class", "stateCircle")
    .attr("opacity", ".7");

    var circlesGroup = chartGroup.selectAll(".stateText")
       .data(demoData)
       .enter()
       .append("text")
       .attr("x", d => xLinScale(d.income))
       .attr("y", d => yLinScale(d.obesity))
       .style("font-size", "10px")
       .style("text-anchor", "middle")
       .style("fill", "white")
       .text(d => (d.abbr));
   
    var toolTip = d3.tip()
    .attr("class", "d3-tip")
    .offset([80, -40])
    .html(function(d) {
      return (`${d.state}<br>Median HHI: ${d.income}<br>Obesity Rate: ${d.obesity}`);
    });

  //Create tooltip in the chart
  chartGroup.call(toolTip);

  // Create event listeners to display and hide the tooltip
  circlesGroup.on("mouseover", function(data) {
    toolTip.show(data, this)
    .transition()
    .duration(500)
    .attr("r", 12)
    .attr("fill", "lightblue");
  })
    // onmouseout event
    .on("mouseout", function(data, index) {
      toolTip.hide(data);
    });

  // Create axes labels
  //Label for the y axis
  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 5)
    .attr("x", 0 - (height/ 1.5))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("Obesity (%)");
  
  // Label for the x axis
  chartGroup.append("text")             
    .attr("transform", "translate(" + (width/1.75) + " ," + (height + margin.top + 10) + ")")
    .style("text-anchor", "middle")
    .text("Household Income (Median)");

  // chartGroup.append("text")
  //   .attr("transform", `translate(${width / 2}, ${height + margin.top - 1 })`)
  //   .attr("class", "axisText")
  //   .text("Household Income (Median)");

  //   // Add the x Axis
  // svg.append("g")
  // .attr("transform", "translate(0," + height + ")")
  // .call(d3.axisBottom(x));
});