const ScrapeHandler = require('./scrape-handler.js');

module.exports = {
  //function to get gpus based on store and search term
  gpu: async function(store="all", search_term="none"){
    console.log("Getting GPUs....");

    //list of all gpu urls
    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Desktop-Graphics-Cards/SubCategory/ID-48/Page-1?Tid=7709&PageSize=96'
    }]

    //calling scrape function to obtain list of items
    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  cpu: async function(store="all", search_term="none"){
    console.log("Getting CPUs....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Processors-Desktops/SubCategory/ID-343/Page-1?Tid=7671&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  memory: async function(store="all", search_term="none"){
    console.log("Getting memory items....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Desktop-Memory/SubCategory/ID-147/Page-1?Tid=7611&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  motherboards: async function(store="all", search_term="none"){
    console.log("Getting motherboards....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/AMD-Motherboards/SubCategory/ID-22/Page-1?Tid=7625&PageSize=96'
    },
    {
        "store": "newegg",
        "url": "https://www.newegg.com/Intel-Motherboards/SubCategory/ID-280/Page-1?Tid=7627&PageSize=96"
    }];

    const urlCounts = {
      "newegg": 2
    }

    let items = await ScrapeHandler.scrape(urls, store, search_term, urlCounts);
    return items;
  },
  power: async function(store="all", search_term="none"){
    console.log("Getting power supplies....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Power-Supplies/SubCategory/ID-58/Page-1?Tid=7657&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  cases: async function(store="all", search_term="none"){
    console.log("Getting pc cases....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Computer-Cases/SubCategory/ID-7/Page-1?Tid=7583&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  }
}
