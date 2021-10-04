//1. importar la data
import {data} from '../data/data.js';

//4 capturar elementos del HTML
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


//2. Mostrar la data

const loadData = (data) => {
    
    data.forEach(personaje => {
       const {id,name,image} = personaje; //desestructuración de objetos
       templateCard.querySelector('h5').textContent = name;
       templateCard.querySelector('img').setAttribute('src',image);
       templateCard.querySelector('.btn-dark').dataset.id = id;
       const clone = templateCard.cloneNode(true);
       fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}


//3. Enviar la data
//Eventos DOMContentLoaded
document.addEventListener('DOMContentLoaded',loadData(data))


//5. capturar evento del item


items.addEventListener('click', (e) => {
   
    //el elemetno que contnga la clase btn-dark retorna un 
    //true
      if(e.target.classList.contains('btn-dark')){
         const id = e.target.dataset.id;
         const per = data.find(personaje => personaje.id == id);
          localStorage.setItem('Detail',JSON.stringify(per));
          window.location.href = 'detail.html'
      }
})
