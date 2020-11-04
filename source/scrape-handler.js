const Newegg_scrape = require('./newegg-scrape.js');

module.exports = {
  scrape: async function(urls, store="all", search_term="none"){
    //items object
    var items = {};
    var neweggItems = [];

    //getting gpus from all stores
    if(store === "all"){
      for(let i = 0; i < urls.length; i++){
        if(urls[i].store === "newegg"){
          items.newegg = await Newegg_scrape.getItems(urls[i].url);
        }
      }
      return items;
    }
    //user requested products from newegg only
    else if(store === "newegg"){
      for(let i = 0; i < urls.length; i++){
        if(urls[i].store === "newegg"){
          items.newegg = await Newegg_scrape.getItems(urls[i].url);
        }
      }
      return items;
    }
    else{
      console.log("Store not supported\n");
    }
  }
};
