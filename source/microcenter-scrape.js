const axios = require('axios');
const cheerio = require('cheerio');

async function getItems($){
  let items = [];
  const itemContainer = $('.product_wrapper');

  $(itemContainer).find('.details').each(function(index, details){
    let item = {
      "title": $(details).find("a").text(),
      "price": $(details).find("[itemprop='price']").text(),
      "store": "microcenter"
    }

    items.push(item);
  });
  return items;
}

module.exports = {
  getItems: async function(url){
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
          
          items = items.concat(await getItems($));
        }
        return items;
      }
      //if there is only 1 page
      else{
        return await getItems($);
      }
  	}
    catch (error) {
  		throw error;
  	}
  }
};
