# PC-Components-API

 Allows the user to pull PC component information from various e-commerce sites.
 
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. Ensure you have Node.js installed on your machine. If you don't have it installed you can download it [here](https://nodejs.org/en/)

### Installing

Step 1. Download or clone the repository

 - To download the repository, click the green code button at the top of the repository page. Then click "Download Zip"
 - To clone the repository, open up your terminal/command line and type `git clone https://github.com/JFiedler23/PC-Components-API.git`
 

# Basic Usage

Every PC component has it's own function that can be called to pull listings for that component.<br>
For example,

```
const pc_component = require("./pc-components")
  
pc_component.gpu().then(items => console.log("Number of items scraped: " + items.length));
```
This will pull all gpu parts from the supported sites.

The items array returned from the function call is an array of objects containing valuable information about a component.

Each object has the following properites

```
let item = {
            "title": part_title,
            "price": part_price,
            "store": store_name,
            "img_url": image_url,
            "type": part_type
          }
```
