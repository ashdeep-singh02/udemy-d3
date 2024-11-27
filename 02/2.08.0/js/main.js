/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(data =>{
    // loop over every pair and convert the height to an int
    data.forEach(buildingPair => {
        buildingPair.height = Number(buildingPair.height);
    })

    // append the SVG to the DIV
    const svg = d3.select("#chart-area").append("svg")
        .attr("height", 500)
        .attr("width", 500)

    // 
    const bars = svg.selectAll("rect")
        .data(data)

    bars.enter().append("rect")
        .attr("x", (d, i) => (i*50) + 50)
        // .attr("y", d => 500 - d.height)
        .attr("height", d => d.height)
        .attr("width", 40)
        .attr("fill", "orange")
})

/**
 
svg.selectAll("rect"):
    This selects all existing <rect> elements in the svg.
    If there are no <rect> elements yet, it creates an empty selection as a placeholder
    The purpose is to set up the link between the data array and the DOM elements.
After the svg.selectAll("rect") line:
    Existing <rect>s: Matched with data (if any).
    Missing <rect>s: Represented as the "enter" selection, where new <rect> elements will be created 
    to match the extra data.
bars.enter().append("rect"):
    .enter() access the enter section, which represents all the data points that do not have corresponding DOM elements yet 
    .append("rect") creates a new <rect> element in the SVG for each of these unmatched data points.
    for every data point in the data array without a corresponding <rect>:  
        A new <rect> element is created in the SVG
        Attributes like x, y, height, width, and fill are set based on the data.
How they work together:
    svg.selectAll("rect"):
        Starts by identifying which <rect> elements exist in the SVG (or sets up a placeholder if none exist).
        Links the data array to the selection, creating three groups: enter, update, and exit.
    bars.enter().append("rect"):
        Handles the "enter" selection (new data points without corresponding DOM elements).
        Creates new <rect> elements for these data points and appends them to the SVG.



**/