/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

// D3 will read in the data from the csv/tsv as JSON 
d3.csv("data/ages.csv").then(data => {
	// Loop over every (Name, Age) pair in the csv file 
	data.forEach(pair => {
		pair.age = Number(pair.age)
	})
	// console.log(data);

	// Append a SVG into the chart-area div
	const svg = d3.select("#chart-area").append("svg")
		.attr("width", 400)
		.attr("height", 400)

	// Bind the circles with the processed Data 
	const circles = svg.selectAll("circle")
		.data(data)

	circles.enter().append("circle")
		.attr("cx", (d, i) => (i * 50) + 50)
		// d = Represents the current data element being processed; d is an object 
		//	   It is the value from the array bound to the selection via .data(data)
		// i = Represents the index of the current data element in the array
		.attr("cy", 250)
		.attr("r", (d) => 2 * d.age)
		.attr("fill", d => {
			// d is an object {name: ..., age: ...}
			if (d.name === "Tony") {
				return "blue"
			}
			else {
				return "red"
			}
	})
}).catch(error =>{
	 console.log(error)
})

// CODE PROVIDED BY COURSE:
// d3.json("data/ages.json").then(data => {
// 	data.forEach(d => {
// 		d.age = Number(d.age)
// 	})
	
// 	const svg = d3.select("#chart-area").append("svg")
// 	.attr("width", 400)
// 	.attr("height", 400)

// 	const circles = svg.selectAll("circle")
// 		.data(data)

// 	circles.enter().append("circle")
// 		.attr("cx", (d, i) => (i * 50) + 50)
// 		.attr("cy", 250)
// 		.attr("r", (d) => 2 * d.age)
// 		.attr("fill", d => {
// 			if (d.name === "Tony") {
// 				return "blue"
// 			}
// 			else {
// 				return "red"
// 			}
// 		})
// }).catch(error => {
// 	console.log(error)
// })
