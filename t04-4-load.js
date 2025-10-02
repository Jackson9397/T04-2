// Load the tvBrandCount.csv file from /data
d3.csv("data/tvBrandCount.csv", d => {
console.log(d); // inspect raw rows as they stream in
});
/* Stub: will draw the chart in T04-5 */
function createBarChart(data) {
  console.log("createBarChart received", data.length, "rows");
}

/* Load CSV, Convert Type, Quick Check */
d3.csv("data/tvBrandCount.csv", d => ({
  brand: d.brand,
  count: +d.count
})).then(data => {
  // Quick check
  console.log(data); // whole array
  console.log("rows:", data.length);
  console.log("max:", d3.max(data, d => d.count));
  console.log("min:", d3.min(data, d => d.count));
  console.log("extent:", d3.extent(data, d => d.count));

  //Optional: sort for easier reading
  data.sort((a, b) => d3.descending(a.count, b.count));

  // Hand off to the chart builder
  createBarChart(data);
});
