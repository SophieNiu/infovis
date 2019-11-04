// Reference: https://bl.ocks.org/d3noob/402dd382a51a4f6eea487f9a35566de0

// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline1 = d3
    .line()
    .x(function(d) {
        return x(d.time);
    })
    .y(function(d) {
        return y(d.texting);
    });

// Load the data
function loadData() {
    d3.csv("data/data.csv", function(d) {
        data = d;
        data.forEach(function(item) {
            console.log(item);
            // item.n = parseFloat(item.n);
            item.time = parseFloat(item.time);
            item.texting = parseFloat(item.texting);
            item.watching = parseFloat(item.watching);
            item.homework = parseFloat(item.homework);
            item.laundry = parseFloat(item.laundry);
        });
    });
}

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3
    .select("#tryonemoretime")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data.csv", function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
        d.date = parseTime(d.date);
        d.close = +d.close;
    });
});
// create svg element:
var svg = d3
    .select("#line")
    .append("svg")
    .attr("width", 800)
    .attr("height", 200);

// prepare a helper function
var lineFunc = d3
    .line()
    .x(function(d) {
        return d.x;
    })
    .y(function(d) {
        return d.y;
    });

// Add the path using this helper function
svg.append("path")
    .attr("d", lineFunc(data))
    .attr("stroke", "black")
    .attr("fill", "none");
