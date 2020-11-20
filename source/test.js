const PC_Component = require("./pc-components.js");

//the functions will return promises since the scraping is done asnchronously
PC_Component.amd_motherboards().then(items => {
  //you can access a store with items.<store_name> which is just an array
  console.log("Items from MicroCenter\n")
  console.log("Number of items scraped: " + items.length);
  for(let i = 0; i < items.length; i++){
    console.log(items[i]);
  }

})
.catch(error => {
  console.log(error);
});
