// t04-5-bars.js (T04-6: Scaling charts)
const createBarChart = (data) => {
  // 1) Logical (viewBox) size vs physical display size
  const viewW = 500;   // keep narrow on purpose, so scale has work to do
  const viewH = 1600;  // tall logical space for many bars
  const displayW = 640; // what users see on page (feel free to tweak)
  const displayH = 420; // "

  // (Optional) clear old chart if Live Server hot-reloads:
  const host = d3.select(".responsive-svg-container");
  host.selectAll("*").remove();

  const svg = host
    .append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`)
    .attr("width", displayW)
    .attr("height", displayH)
    .style("border", "1px solid black"); // dev-only to see canvas

  // 2) X scale (numeric) — adjust 'count' if your numeric column differs
  const xMax = d3.max(data, d => d.count);
  const xScale = d3.scaleLinear()
    .domain([0, xMax])   // data space
    .range([0, viewW]);  // pixels in the logical width

  // 3) Y scale (categorical) — adjust 'brand' if your category column differs
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, viewH])
    .paddingInner(0.2)
    .paddingOuter(0.1);

  // 4) Draw bars using the scales
  svg.selectAll("rect")
    .data(data)
    .join("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("x", 0)
      .attr("y", d => yScale(d.brand))
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("fill", "steelblue");
};
