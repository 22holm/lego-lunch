const container = document.querySelector('#img-container');

var request = new XMLHttpRequest();

const gif = document.createElement('img');
container.appendChild(gif);

const urlTag = 'https://api.giphy.com/v1/gifs/random?api_key=yDiiFh3IvRqMw8D6Xd5i0dOC4IrnWsBM&tag=lego&rating=g'
// const urlSearch = 'https://api.giphy.com/v1/gifs/search?q=food&api_key=yDiiFh3IvRqMw8D6Xd5i0dOC4IrnWsBM' //aner ikke, hvorfor search query ikke virker

function getGif() {
   request.open('GET', urlTag);
   request.onload = function () {
      var response = request.response;
      var parsedData = JSON.parse(response);
      var originalUrl = parsedData.data.images.original.url;
      console.log(originalUrl);

      //Create gif on page

      gif.setAttribute('src', originalUrl);
   };
   request.send();
}

function getGifNoFirstDelay(func, interval) {
   func();
   setInterval(func, interval);
}

getGifNoFirstDelay(getGif, 10000);

// export { getGif, getGifNoFirstDelay }