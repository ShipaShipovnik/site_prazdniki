let offset = 0; //смещение от левого края
const sliderline = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',function(){
    offset = offset+1154;
    sliderline.style.left = offset+'px';
});
