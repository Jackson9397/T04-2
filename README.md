Appliance Energy – D3 Visualization Project (T04-7: Adding Labels)
🧭 Overview

This mini-site demonstrates an interactive D3.js bar chart integrated within a simple single-page web application for visualizing TV brand energy consumption.
It forms part of the COS30045 “Data Visualisation” practical exercises — specifically Task T04-7: Adding Labels.

🎯 Aim

Add category and value labels to each bar in the D3 chart so that labels remain aligned with their bars when layout or data changes.

💡 Purpose

Charts without labels are difficult to interpret. By grouping bars and their labels inside <g> elements, D3 ensures that:

Bars and labels move together vertically.

Layout remains consistent across screen sizes.

The chart becomes readable and presentation-ready.

🧩 File Structure
File	Purpose
index.html	Main page — defines navigation, the chart container, and script loading order. 

index


styles.css	Site-wide theme and layout (palette, header, cards, grid, SVG container). 

styles


script.js	Implements a simple hash-based router for navigation (Home / Televisions / About Us). 

script


energy-d3.js	Introductory D3 script for testing shapes and text (adds a green rectangle and message). 

energy-d3


t04-4-load.js	Loads and parses tvBrandCount.csv, logs summary stats, and calls createBarChart(). 

t04-4-load


t04-5-bars.js	Implements createBarChart() with grouped bars and aligned labels (T04-7). 

t04-5-bars

⚙️ Setup Instructions

Place all files in the same directory (plus your data/tvBrandCount.csv file).

Open the folder in VS Code.

Right-click index.html → Open with Live Server.

The page loads automatically and displays:

A navigation bar

Demo content

A responsive D3 chart below “Televisions”

Ensure the scripts are loaded in this order (inside <body>):

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="t04-4-load.js"></script>  <!-- loads CSV -->
<script src="t04-5-bars.js"></script>  <!-- builds chart -->


index

🧠 How It Works
1️⃣ Data Loading (t04-4-load.js)

Loads CSV columns:
brand → string
count → numeric

Sorts descending by count.

Passes parsed data to createBarChart(data). 

t04-4-load

2️⃣ Chart Construction (t04-5-bars.js)

Defines SVG viewBox, xScale and yScale.

Uses selectAll("g").data(data).join("g") to create one group per row.

Each group contains:

A <rect> bar (x = 100 so left labels align neatly)

Left-aligned category text (text-anchor="end")

Right-side numeric value text (x = 100 + xScale(d.count) + 4)


t04-5-bars

🖼️ Visual & Layout Details

Container: .responsive-svg-container centers the SVG with width capped at 1200 px. 

styles

Bar color: steelblue

Font: sans-serif 13 px

SVG border: 1px solid #ccc

Dynamic sizing: height grows with data length (Math.max(220, data.length * 28)).

📚 Learning Outcomes

✅ Apply D3 scales and joins
✅ Group related graphical + textual elements with <g>
✅ Label bars effectively for readability
✅ Integrate D3 visualizations within an existing website layout

⚙️ Optional: Testing D3 (energy-d3.js)

A quick D3 test draws a green rectangle and adds a short message about energy-efficient TVs. 

energy-d3

🧭 Navigation & Interactivity

Router: Controlled via script.js, switching between #/, #/televisions, and #/about. 

script

Calculator: On the Televisions page, users can estimate electricity cost by entering power, hours, and tariff.

🔍 Troubleshooting
Issue	Possible Fix
No chart visible	Confirm Live Server running and tvBrandCount.csv is in /data/ folder.
Labels misaligned	Adjust .attr("y", 15) (category) or .attr("y", 12) (value) in t04-5-bars.js.
Wrong script order	Ensure t04-4-load.js loads before t04-5-bars.js.
Data not numeric	Check +d.count coercion in loader file.
📖 References

Dufour & Meeks (2024), Data Visualization with D3.js — Chapter 3 covers selections, joins, and transforms.

D3.js Official Docs – https://d3js.org/

📝 Commit Message
feat(t04-7): add grouped bars with category/value labels; keep T04-6 rect block commented

🧑‍💻 Author

Ho Sheng Yang (Swinburne University of Technology Sarawak)
© 2025 – All rights reserved.