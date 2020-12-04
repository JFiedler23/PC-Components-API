const PC_Component = require("./pc-components.js");

PC_Component.gpu("all", "nvidia").then(items => {
  items.forEach(item => console.log(item));
  console.log("Number of items scraped: " + items.length);
})
.catch(error => {
  console.log(error);
});
