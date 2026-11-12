const places = [
    {name:'Goa' , info: 'Golden beaches'},
    {name:'Ooty' , info: 'Misty hills'},
    {name:'Jaipur' , info: 'Pink city'},
    {name:'Munnar' , info: 'Tea gardens'},
];

const gallery = document.querySelector("#gallery");
places.forEach(function (place){
    const card = document.createElement('article');
    card.classList.add('card');

    const h3 = document.createElement('h3');
    h3.textContent = place.name;

    const p = document.createElement('p');
    p.textContent=place.info;

    card.append(h3,p);
    gallery.append(card);
});
