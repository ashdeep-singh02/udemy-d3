/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/
 
// D3 Select uses CSS Selectors to select page elements - select via class/id
// d3.select(...) vs d3.selectAll(...)

// Once a element is selected, use the .append(*element to add*) method to add smth to it as a child node 
// Set attributes via .attr method - alter attributes of elements 
 
const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400)
const svg2 = d3.select("#chart-area2").append("svg")
  .attr("width", 500)
  .attr("height", 400)

svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "red")
svg2.append("rect")
  .attr("width", 100)
  .attr("height", 250)  
  .attr("fill", "green")
  .attr("rx", 15)
  .attr("ry", 15)

