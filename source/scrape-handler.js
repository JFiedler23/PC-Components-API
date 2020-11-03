const Newegg_scrape = require('./newegg-scrape.js');

module.exports = {
  scrape: async function(urls, store="all", search_term="none", urlCounts={}){
    //items object
    var items = {};
    var neweggItems = [];

    //getting gpus from all stores
    if(store === "all"){
      if(Object.keys(urlCounts).length > 0){
        for(let i = 0; i < urls.length; i++){
          //getting items from newegg and adding to object
          if(urls[i].store === "newegg" && urlCounts.newegg > 1){
            let temp = await Newegg_scrape.getItems(urls[i].url);
            neweggItems.push.apply(neweggItems, temp);
          }
          else if(urls[i].store === "newegg" && urlCounts.newegg <= 1){
            items.newegg = await Newegg_scrape.getItems(urls[i].url);
          }
        }
        items.newegg = neweggItems;
      }
      else{
        for(let i = 0; i < urls.length; i++){
          if(urls[i].store === "newegg"){
            items.newegg = await Newegg_scrape.getItems(urls[i].url);
          }
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
}
