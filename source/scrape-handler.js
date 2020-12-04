const newegg_scrape = require('./newegg-scrape.js');
const microcenter_scrape = require('./microcenter-scrape.js');

async function getAllStores(urls, part_type){
  let items = [];
  for(let i = 0; i < urls.length; i++){
    if(urls[i].store === "newegg"){
      items = [...items, ...await newegg_scrape.getItems(urls[i].url, part_type)];
    }
    else if(urls[i].store === "microcenter"){
      items = [...items, ...await microcenter_scrape.getItems(urls[i].url, part_type)];
    }
  }
  return items;
}

async function getNewegg(urls, part_type){
  let items = [];
  for(let i = 0; i < urls.length; i++){
    if(urls[i].store === "newegg"){
      items = [...items, ...await newegg_scrape.getItems(urls[i].url, part_type)];
    }
  }
  return items;
}

async function getMicrocenter(urls, part_type){
  let items = [];
  for(let i = 0; i < urls.length; i++){
    if(urls[i].store === "microcenter"){
      items = [...items, ...await microcenter_scrape.getItems(urls[i].url, part_type)];
    }
  }
  return items;
}

function search(search_term){
  return (item) => {
    let title = item.title.toLowerCase();

    if(title.indexOf(search_term) > -1){
      return item;
    }
  } 
}

module.exports = {
  scrape: async function(urls, part_type, store="all", search_term="none"){

    switch(store){
      case "all":
        let items = await getAllStores(urls, part_type);
        return (search_term === "none") ? items : items.filter(search(search_term.toLowerCase()));
      case "newegg":
        let neweggItems = await getNewegg(urls, part_type);
        return (search_term === "none") ? neweggItems : neweggItems.filter(search(search_term.toLowerCase()));
      case "microcenter":
        let microcenterItems = await getMicrocenter(urls, part_type);
        return (search_term === "none") ? microcenterItems : microcenterItems.filter(search(search_term.toLowerCase()));
    }
  }
};
