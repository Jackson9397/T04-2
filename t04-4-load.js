// t04-4-load.js
d3.csv("data/tvBrandCount.csv", d => ({
  brand: d.brand,
  count: +d.count
})).then(data => {
  console.log(data);
  console.log("rows:", data.length);
  console.log("max:", d3.max(data, d => d.count));
  console.log("min:", d3.min(data, d => d.count));
  console.log("extent:", d3.extent(data, d => d.count));

  // Optional: sort for easier reading
  data.sort((a, b) => d3.descending(a.count, b.count));

  // Hand off to the chart builder (defined in t04-5-bars.js)
  createBarChart(data);
});
