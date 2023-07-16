const showq = document.getElementById('box2');
const show = document.getElementById('box');
const conScene = document.getElementById('con-btn');
const canvas = document.getElementById('render-canvas');
const btnDiv = document.getElementById('btn-div');
const btnDiv2 = document.getElementById('con-btn2');
const show2 = document.getElementById('box3');
const show3 = document.getElementById('footer');
const zoom = document.getElementById('zoom');
const zoomo = document.getElementById('con2-btn');
const zoomc = document.getElementById('con2-btn2');

if(conScene){
    conScene.addEventListener('click', () => {
        canvas.style.zIndex = '5';
        btnDiv.style.bottom = '10%';
        btnDiv2.style.display = 'block';
        zoom.style.display = 'block';
    
})}
if(zoomo){
    zoomo.addEventListener('click', () => {

        zoomc.style.display = 'block';
    
})}
if(zoomc){
    zoomc.addEventListener('click', () => {

        zoomc.style.display = 'none';
    
})}
if(btnDiv2){
    btnDiv2.addEventListener('click', () => {
        canvas.style.zIndex = '-1';
        btnDiv.style.bottom = '-20%';
        btnDiv2.style.display = 'none';
        zoom.style.display = 'none';

})}
window.addEventListener("scroll", () =>{
    const scrolled = window.scrollY;
    console.log(scrolled)
    if (scrolled >= 511 && scrolled < 1111 ){
       showq.style.opacity = '100%';
       showq.style.marginLeft = '0';
        show.style.opacity = '0';
       show.style.marginRight = '1000px';

    }
    if ( scrolled >1111 ){
        showq.style.opacity = '0%';
        showq.style.marginLeft = '-1000px';
 
     }
    if (scrolled <= 510 ){
        showq.style.opacity = '0%';
        showq.style.marginLeft = '-1000px';
 
     }
     if (scrolled <= 400 ){
        show.style.opacity = '100%';
       show.style.marginRight = '0';
 
     }
     if (scrolled >= 400 ){
        
        show.style.opacity = '0';
       show.style.marginRight = '-1000px';
 
     }

     if (scrolled >= 1411 ){
        showq.style.opacity = '0%';
        showq.style.marginLeft = '-1000px';
        show2.style.marginLeft = '0';
         show.style.opacity = '0';
        show.style.marginRight = '1000px';
 
     }
     if (scrolled < 1211 ){
        show2.style.marginLeft = '-2000px';
 
     }
     if (scrolled > 1711 ){
        show2.style.marginLeft = '-2000px';
 
     }
  
    
     if (scrolled >= 1911 ){
        show3.style.opacity = '100%';
        show3.style.display = 'block';

     }
     if (scrolled < 1811 ){
        show3.style.opacity = '0';
        show3.style.display = 'none';

     }

})