const Newegg_Scrape = require('./newegg-scrape.js');
const Micro_Center_Scrape = require('./microcenter-scrape.js');

async function getAllStores(urls){
  var items = {};
  for(let i = 0; i < urls.length; i++){
    if(urls[i].store === "newegg"){
      items.newegg = await Newegg_Scrape.getItems(urls[i].url);
    }
    else if(urls[i].store === "microcenter"){
      items.microcenter = await Micro_Center_Scrape.getItems(urls[i].url);
    }
  }
  return items;
}

module.exports = {
  scrape: async function(urls, store="all", search_term="none"){
    //items object
    var items = {};
    var neweggItems = [];

    switch(store){
      case "all":
        items = await getAllStores(urls);
        return items
        break;
    }
  }
};
