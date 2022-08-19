
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

const midtownSite = 'https://lego.isscatering.dk/midtown';
const campusSite = 'https://lego.isscatering.dk/aastvej';

app.get('/', function (req, res) {
   res.json('Hello from index');
})

app.get('/midtownMenu', (req, res) => {
   axios(midtownSite)
      .then(response => {
         const midtownHtml = response.data
         const midtownMenu = cheerio.load(midtownHtml)
         const menuItemsArray = []

         midtownMenu('.menu-row.show-description.row', midtownHtml).each(function () {
            const title = midtownMenu(this).find('.element.title.col-md-12.col-xs-12').text().trim()
            const description = midtownMenu(this).find('.element.show-description.description.col-md-12.col-xs-12').text().trim()

            menuItemsArray.push({
               title,
               description
            })
         })

         res.json(menuItemsArray)
      }).catch(err => console.log(err));
})


app.get('/campusMenu', (req, res) => {
   axios(campusSite)
      .then(response => {
         const campusHtml = response.data
         // console.log(campusHtml);
         const campusMenu = cheerio.load(campusHtml)
         const menuItemsArray = []

         campusMenu('.menu-row.show-description.row', campusHtml).each(function () {
            const title = campusMenu(this).find('.element.title.col-md-12.col-xs-12').text().trim()
            const description = campusMenu(this).find('.element.show-description.description.col-md-12.col-xs-12').text().trim()
            menuItemsArray.push({
               title,
               description
            })
         })

         res.json(menuItemsArray);
      }).catch(err => console.log(err));
})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));