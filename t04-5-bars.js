// t04-5-bars.js (T04-7: Adding labels)
const createBarChart = (data) => {
  // --- Sizes (logical vs. display) ---
  const viewW = 500;
  const viewH = Math.max(220, data.length * 28);  // grows with rows
  const displayW = 640;
  const displayH = Math.min(480, data.length * 24 + 40);

  // Clear old chart if hot-reloading
  const host = d3.select(".responsive-svg-container");
  host.selectAll("*").remove();

  // --- SVG root ---
  const svg = host.append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`)
    .attr("width", displayW)
    .attr("height", displayH)
    .style("border", "1px solid #ccc");

  // --- Scales (from T04-6) ---
  const xMax = d3.max(data, d => d.count);
  const xScale = d3.scaleLinear()
    .domain([0, xMax])
    .range([0, viewW]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))   // change if your category differs
    .range([0, viewH])
    .paddingInner(0.2)
    .paddingOuter(0.1);

  // OLD rectangle-only drawing block from T04-6 (COMMENTED OUT for T04-7).
  /*
  svg.selectAll("rect")
    .data(data)
    .join("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("x", 0)
      .attr("y", d => yScale(d.brand))
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("fill", "steelblue");
  */

  // --- NEW in T04-7: group per row (bar + labels together) ---
  const labelX = 100; // text aligns to this, bars start here too

  const barAndLabel = svg.selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  // Bar (inside the group)
  barAndLabel.append("rect")
    .attr("x", labelX)
    .attr("y", 0) // group handles vertical position
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "steelblue");

  // Category text (left of bar, right-aligned to labelX)
  barAndLabel.append("text")
    .text(d => d.brand)   // change if your category differs
    .attr("x", labelX)
    .attr("y", 15)        // tweak to center in band
    .attr("text-anchor", "end")
    .style("font-family", "sans-serif")
    .style("font-size", "13px");

  // Value text (at the end of each bar)
  barAndLabel.append("text")
    .text(d => d.count)   // change if your numeric differs
    .attr("x", d => labelX + xScale(d.count) + 4)
    .attr("y", 12)        // tweak as needed
    .style("font-family", "sans-serif")
    .style("font-size", "13px");
};
