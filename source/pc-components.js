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
  amd_motherboards: async function(store="all", search_term="none"){
    console.log("Getting AMD motherboards....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/AMD-Motherboards/SubCategory/ID-22/Page-1?Tid=7625&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  intel_motherboards: async function(store="all", search_term="none"){
    console.log("Getting intel motherboards....");

    const urls = [{
        "store": "newegg",
        "url": "https://www.newegg.com/Intel-Motherboards/SubCategory/ID-280/Page-1?Tid=7627&PageSize=96"
    }];

    let items = await ScrapeHandler.scrape(urls, store, search_term);
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
  },
  case_fans: async function(store="all", search_term="none"){
    console.log("Getting case fans....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Case-Fans/SubCategory/ID-573/Page-1?Tid=7998&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  cpu_fans: async function(store="all", search_term="none"){
    console.log("Getting cpu fans....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/CPU-Fans-Heatsinks/SubCategory/ID-574/Page-2?Tid=8000&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  hdd: async function(store="all", search_term="none"){
    console.log("Getting hard drives....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Desktop-Internal-Hard-Drives/SubCategory/ID-14/Page-1?Tid=167523&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  },
  ssd: async function(store="all", search_term="none"){
    console.log("Getting SSDs....");

    const urls = [{
        "store": "newegg",
        "url": 'https://www.newegg.com/Internal-SSDs/SubCategory/ID-636/Page-1?Tid=11693&PageSize=96'
    }]

    let items = await ScrapeHandler.scrape(urls, store, search_term);
    return items;
  }
};
