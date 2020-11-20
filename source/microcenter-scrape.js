const axios = require('axios');
const cheerio = require('cheerio');

async function getItems($, part_type){
  let items = [];
  const itemContainer = $('.product_wrapper');

  let imgURLs = [];
  let titles = [];
  let prices = [];
  let i = 0;

  //getting item image urls
  $(itemContainer).find('.SearchResultProductImage').each(function(index, url){
    imgURLs.push($(url).attr('src'));
  });

  //getting title and price
  $(itemContainer).find('.details').each(function(index, details){
    titles.push($(details).find("a").text());
    prices.push($(details).find("[itemprop='price']").text());
  });

  for(let i = 0; i < titles.length; i++){
    let item = {
      "title": titles[i],
      "price": prices[i],
      "store": "microcenter",
      "img_url": imgURLs[i],
      "type": part_type
    }
    items.push(item);
  }
  return items;
}

module.exports = {
  getItems: async function(url, part_type){
  	try {
      console.log("Getting items from Micro Center....");
      //initial request to get number of pages
  		const { data } = await axios.get(url);
  		const $ = cheerio.load(data);
      let items = [];

      //getting number of pages
      const numPages = parseInt($('.pages.inline').find('a').text()[0]);

      //if there are multiple pages
      if(numPages){
        for(let i = 1; i <= numPages; i++){
          let temp = url.slice(0, url.indexOf("page=") + 5) + i + url.slice(url.indexOf("page=") + 6);
          //making another request for each page
          const { data } = await axios.get(temp);
      		const $ = cheerio.load(data);

          items = items.concat(await getItems($, part_type));
        }
        return items;
      }
      //if there is only 1 page
      else{
        return await getItems($, part_type);
      }
  	}
    catch (error) {
  		throw error;
  	}
  }
};
