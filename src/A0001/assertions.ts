/* eslint-disable*/
const body1 = document.querySelector('body');
if (body1)  body1.style.background='red';

 // type assertion
 const body3 = document.querySelector('body') as HTMLBodyElement;
 body3.style.background='red'


 //HTMLELEMENT 
 const input = document.querySelector('.input') as HTMLInputElement;
 input.value='teste';
 input.focus();

 // type assertion NÃO RECOMENDADO
 const body4 = (document.querySelector('body')as unknown) as number;
 /// NON-NULL ASSERTION (!) NÃO RECOMENDADO
 const body = document.querySelector('body')!
 body.style.background = 'red'
