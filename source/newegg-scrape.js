const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  getItems: async function(url, part_type){
  	try {
      console.log("Getting items from Newegg....")
      let items = [];
      //initial request to get number of pages
  		const { data } = await axios.get(url);
  		const $ = cheerio.load(data);

      //regex to pull integers from pagination string
      var regex = /\d+/g;

      //getting number of pages
      const pagination = $('.list-tool-pagination-text').text().match(regex);
      const num_pages = parseInt(pagination[1]);

      for(let i = 1; i < num_pages + 1; i++){
        //console.log("Scraping page: " + i);
        let temp = url.slice(0, url.indexOf("Page-") + 5) + i + url.slice(url.indexOf("Page-") + 6);
        //making request to url and loading html using cheerio
    		const { data } = await axios.get(temp);
    		const $ = cheerio.load(data);

        //getting all items on page
        const item = $('.item-cell');

        //used to store titles and prices
        const itemTitles = [];
        const itemPrices = [];
        const imgURLs = [];

        //getting all item titles
        $(item).find('.item-title').each(function(index, title){
          itemTitles.push($(title).text());
        });

        //getting all item prices
        $(item).find('.price-current').each(function(index, price){
          var temp = $(price).text();
          var price;

          //cleaninng up prices
          if(temp.indexOf("(") > 0){
            price = temp.slice(0, temp.indexOf("(")-1);
            itemPrices.push(price);
          }
          else{
            price = temp.slice(0, temp.length-2);
            itemPrices.push(price);
          }
        });

        $(item).find('.item-img').find('img').each(function(index, url){
          imgURLs.push($(url).attr('src'));
        });

        //creating item objects and pushing them to items array
        for(let i = 0; i < itemPrices.length; i++){
          let item = {
            "title": itemTitles[i],
            "price": itemPrices[i],
            "store": "newegg",
            "img_url": imgURLs[i],
            "type": part_type
          }
          items.push(item);
        }
      }
      console.log("Newegg scrape complete!")
      return items
  	}
    catch (error) {
  		throw error;
  	}
  }
};
