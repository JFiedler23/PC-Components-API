const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  getItems: async function(url){
    try {
      console.log("Getting items from Amazon....");
      let items = [];
      //initial request to get number of pages
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const itemContainer = $(".a-section.a-spacing.medium");

      //used to store titles and prices
      const itemTitles = [];
      const itemPrices = [];

      $(itemContainer).find('.sg-row').each(function(index, item){
        console.log($(item).find(".a-size-medium.a-color-base.a-text-normal").text());
      });

      /*
      //getting all item titles
      $(item).find('.a-size-medium.a-color-base.a-text-normal').each(function(index, title){
        itemTitles.push($(title).text());
      });

      $(item).find(".a-price").each(function(index, price){
        itemPrices.push($(price).find(".a-price-whole").text() + $(price).find(".a-price-fraction").text());
      });

      for(let i = 0; i < itemTitles.length; i++){
        console.log(itemTitles[i] + " - " + itemPrices[i]);
      }
      */
    }
    catch(error){
      throw error;
    }
  }
};
