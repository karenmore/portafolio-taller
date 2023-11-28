/********************************************************************************************************
// ? Esto hace referencia a cuando se carga mi ventana completa de la pagina con estilos imagenes y todo.
********************************************************************************************************/
// window.addEventListener('load', function(){
//     console.log('Desde window y Load');
//     console.log(document.querySelector('h1'));
// });
/**********************************************************************
// ? Esto hace referencia a cuando se carga mi documento html solamente
**********************************************************************/
// document.addEventListener('DOMContentLoaded', function(){
//     console.log('desde document y DOMContentLoaded');
//     console.log(document.querySelector('h1'));
// });

console.log(document.querySelector('h1'));

// function showClick(){
//     const h1 = document.querySelector('h1');
//     let i = 1;
//     h1.addEventListener('click', function(){
//         console.log(`El usuario hizo ${i++} clicks`);
//     })
// }
// showClick();

 function evento () {
     const list = document.querySelector('.header__list');
    list.classList.toggle('active');
}

function showMenu () {
    const btn = document.querySelector('.header__btn');
    const list = document.querySelector('.header__list');
    console.log(btn);
    btn.addEventListener('click', function(){
        list.classList.toggle('active');
    });
    // btn.addEventListener('click', evento);
    // console.log(evento);
}
showMenu();