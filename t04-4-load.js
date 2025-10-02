// Load the tvBrandCount.csv file from /data
d3.csv("data/tvBrandCount.csv", d => {
console.log(d); // inspect raw rows as they stream in
});