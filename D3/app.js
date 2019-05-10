
// Load Demo Data
// d3.csv("data.csv", function(demoData) {
//     if (error) return console.warn(error);
d3.csv("data.csv").then(function(demoData) { 
    console.log(demoData);
    });
    // // log a list of names
    // var states = demoData.map(data => data.state);
    // console.log("state", names);
  
    // // Cast each hours value in tvData as a number using the unary + operator
    // demoData.forEach(function(data) {
    //   data.hours = +data.hours;
    //   console.log("Name:", data.name);
    //   console.log("Hours:", data.hours);
  //   });
  // });
  // d3.csv('data.csv', function (data) {
  //   // Variables
  //   var body = d3.select('.scatter')
  //   var margin = { top: 50, right: 50, bottom: 50, left: 50 }
  //   var h = 500 - margin.top - margin.bottom
  //   var w = 500 - margin.left - margin.right
  //   var formatPercent = d3.format('.2%')
  //   // Scales
  //   var colorScale = d3.scale.category20()
  //   var xScale = d3.scale.linear()
  //     .domain([
  //       d3.min([0,d3.min(data,function (d) { return d.asd })]),
  //       d3.max([0,d3.max(data,function (d) { return d.asd })])
  //       ])
  //     .range([0,w])
  //   var yScale = d3.scale.linear()
  //     .domain([
  //       d3.min([0,d3.min(data,function (d) { return d.aror })]),
  //       d3.max([0,d3.max(data,function (d) { return d.aror })])
  //       ])
  //     .range([h,0])
  //   // SVG
  //   var svg = body.append('svg')
  //       .attr('height',h + margin.top + margin.bottom)
  //       .attr('width',w + margin.left + margin.right)
  //     .append('g')
  //       .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
  //   // X-axis
  //   var xAxis = d3.svg.axis()
  //     .scale(xScale)
  //     .tickFormat(formatPercent)
  //     .ticks(5)
  //     .orient('bottom')
  //   // Y-axis
  //   var yAxis = d3.svg.axis()
  //     .scale(yScale)
  //     .tickFormat(formatPercent)
  //     .ticks(5)
  //     .orient('left')
  //   // Circles
  //   var circles = svg.selectAll('circle')
  //       .data(data)
  //       .enter()
  //     .append('circle')
  //       .attr('cx',function (d) { return xScale(d.asd) })
  //       .attr('cy',function (d) { return yScale(d.aror) })
  //       .attr('r','10')
  //       .attr('stroke','black')
  //       .attr('stroke-width',1)
  //       .attr('fill',function (d,i) { return colorScale(i) })
  //       .on('mouseover', function () {
  //         d3.select(this)
  //           .transition()
  //           .duration(500)
  //           .attr('r',20)
  //           .attr('stroke-width',3)
  //       })
  //       .on('mouseout', function () {
  //         d3.select(this)
  //           .transition()
  //           .duration(500)
  //           .attr('r',10)
  //           .attr('stroke-width',1)
  //       })
  //     .append('title') // Tooltip
  //       .text(function (d) { return d.variable +
  //                            '\nReturn: ' + formatPercent(d.aror) +
  //                            '\nStd. Dev.: ' + formatPercent(d.asd) })
  //   // X-axis
  //   svg.append('g')
  //       .attr('class','axis')
  //       .attr('transform', 'translate(0,' + h + ')')
  //       .call(xAxis)
  //     .append('text') // X-axis Label
  //       .attr('class','label')
  //       .attr('y',-10)
  //       .attr('x',w)
  //       .attr('dy','.71em')
  //       .style('text-anchor','end')
  //       .text('Annualized Standard Deviation')
  //   // Y-axis
  //   svg.append('g')
  //       .attr('class', 'axis')
  //       .call(yAxis)
  //     .append('text') // y-axis Label
  //       .attr('class','label')
  //       .attr('transform','rotate(-90)')
  //       .attr('x',0)
  //       .attr('y',5)
  //       .attr('dy','.71em')
  //       .style('text-anchor','end')
  //       .text('Annualized Return')
  // })
  ///////////////
  // The code for the chart is wrapped inside a function that
// automatically resizes the chart
// function makeResponsive() {

//   // if the SVG area isn't empty when the browser loads,
//   // remove it and replace it with a resized version of the chart
//   var svgArea = d3.select("body").select("svg");

//   // clear svg is not empty
//   if (!svgArea.empty()) {
//     svgArea.remove();
//   }

//   // SVG wrapper dimensions are determined by the current width and
//   // height of the browser window.
//   var svgWidth = window.innerWidth;
//   var svgHeight = window.innerHeight;

//   var margin = {
//     top: 50,
//     bottom: 50,
//     right: 50,
//     left: 50
//   };

//   var height = svgHeight - margin.top - margin.bottom;
//   var width = svgWidth - margin.left - margin.right;

//   // Append SVG element
//   var svg = d3
//     .select(".chart")
//     .append("svg")
//     .attr("height", svgHeight)
//     .attr("width", svgWidth);

//   // Append group element
//   var chartGroup = svg.append("g")
//     .attr("transform", `translate(${margin.left}, ${margin.top})`);

//   // Read CSV
//   d3.csv("norway_medals.csv")
//     .then(function(medalData) {

//       // create date parser
//       var dateParser = d3.timeParse("%d-%b");

//       // parse data
//       medalData.forEach(function(data) {
//         data.date = dateParser(data.date);
//         data.medals = +data.medals;
//       });

//       // create scales
//       var xTimeScale = d3.scaleTime()
//         .domain(d3.extent(medalData, d => d.date))
//         .range([0, width]);

//       var yLinearScale = d3.scaleLinear()
//         .domain([0, d3.max(medalData, d => d.medals)])
//         .range([height, 0]);

//       // create axes
//       var xAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
//       var yAxis = d3.axisLeft(yLinearScale).ticks(6);

//       // append axes
//       chartGroup.append("g")
//         .attr("transform", `translate(0, ${height})`)
//         .call(xAxis);

//       chartGroup.append("g")
//         .call(yAxis);

//       // line generator
//       var line = d3.line()
//         .x(d => xTimeScale(d.date))
//         .y(d => yLinearScale(d.medals));

//       // append line
//       chartGroup.append("path")
//         .data([medalData])
//         .attr("d", line)
//         .attr("fill", "none")
//         .attr("stroke", "red");

//       // append circles
//       var circlesGroup = chartGroup.selectAll("circle")
//         .data(medalData)
//         .enter()
//         .append("circle")
//         .attr("cx", d => xTimeScale(d.date))
//         .attr("cy", d => yLinearScale(d.medals))
//         .attr("r", "10")
//         .attr("fill", "gold")
//         .attr("stroke-width", "1")
//         .attr("stroke", "black");

//       // Date formatter to display dates nicely
//       var dateFormatter = d3.timeFormat("%d-%b");

//       // Step 1: Initialize Tooltip
//       var toolTip = d3.tip()
//         .attr("class", "tooltip")
//         .offset([80, -60])
//         .html(function(d) {
//           return (`<strong>${dateFormatter(d.date)}<strong><hr>${d.medals}
//           medal(s) won`);
//         });

//       // Step 2: Create the tooltip in chartGroup.
//       chartGroup.call(toolTip);

//       // Step 3: Create "mouseover" event listener to display tooltip
//       circlesGroup.on("mouseover", function(d) {
//         toolTip.show(d, this);
//       })
//       // Step 4: Create "mouseout" event listener to hide tooltip
//         .on("mouseout", function(d) {
//           toolTip.hide(d);
//         });
//     });
// }

// // When the browser loads, makeResponsive() is called.
// makeResponsive();

// // When the browser window is resized, makeResponsive() is called.
// d3.select(window).on("resize", makeResponsive);

  
