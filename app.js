const midtownContent = document.querySelector('div.menu-frame.midtown');
const campusContent = document.querySelector('div.menu-frame.campus');
const iconArray = ['../src/assets/icons/hot.png', '../src/assets/icons/diet.png', '../src/assets/icons/salad.png'];

async function getMidTownMenu() {   //consider using async/await instead of promises
   fetch('https://lh-lunch-api.azurewebsites.net/midtownmenu')   //
      .then(response => { return response.json() }) //return response.json()
      .then(data => {
         console.log(data);
         // console.log(appUrl);   //check return type
         if (!data.length) {
            console.log('There is no data!');
            if (midtownContent.childElementCount < 2) {
               const noMenuMsg = `<div class="menu-item no-menu"><h2>Nothing on the menu today</h2></div>`
               midtownContent.insertAdjacentHTML('beforeend', noMenuMsg);
            }
         } else {
            data.forEach(item => {
               const menuItem = `<div class="menu-item"><h3>${item.title}</h3><p>${item.description}</p></div>`
               midtownContent.insertAdjacentHTML('beforeend', menuItem)
            })
         }
      })
      .catch(err => console.log(err))
}

async function getCampusMenu() {
   fetch('https://lh-lunch-api.azurewebsites.net//campusmenu')   //
      .then(response => { return response.json() })
      .then(data => {
         if (!data.length) {
            console.log('There is no data!');
            if (campusContent.childElementCount < 1) {
               const noMenuMsg = `<div class="menu-item no-menu"><h2>Intet på menuen i dag</h2></div>`
               campusContent.insertAdjacentHTML('beforeend', noMenuMsg);
            }
         } else {
            data.forEach(item => {
               const menuItem = `<div class="menu-item"><h3>${item.title}</h3><p>${item.description}</p></div>`
               campusContent.insertAdjacentHTML('beforeend', menuItem)
            })
         }
      })
      .catch(err => console.log(err));
}

getMidTownMenu();
getCampusMenu();
