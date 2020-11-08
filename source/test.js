const PC_Component = require("./pc-components.js");

PC_Component.ssd().then(items => {
  console.log("Number of items scraped: " + items.microcenter.length);
  console.log(items.microcenter[0]);
})
.catch(error => {
  console.log(error);
});
