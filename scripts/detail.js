let h1 = document.querySelector('h1');
let img = document.querySelector('img');
let boton = document.querySelector('.btn-dark');

//6 obtener data del localstorage

const getLocalStorage = () => {

    let detalle = JSON.parse(localStorage.getItem('Detail'));
    const {name,image} = detalle;
    h1.textContent = name,
    img.setAttribute('src',image)
}


document.addEventListener('DOMContentLoaded',getLocalStorage)


boton.addEventListener('click', () => {
      window.location.href = 'index.html';
})