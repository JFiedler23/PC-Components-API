const PC_Component = require("./pc-components.js");

PC_Component.ssd().then(items => {
  console.log("Number of items scraped: " + items.newegg.length);
  console.log(items.newegg[0]);
})
.catch(error => {
  console.log(error);
});
