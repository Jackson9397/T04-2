// t04-5-bars.js
const createBarChart = (data) => {
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 400")     // temp canvas; we’ll scale later
    .style("border", "1px solid black"); // dev-only so you can see it

  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`) // helpful for debugging
    .attr("width", d => d.count)              // raw numeric value for now
    .attr("height", 16);                      // constant bar height
};
