let like = document.querySelector('#hel');
let emo = document.querySelector('.single_imo img');
console.log('emo: ', emo);
let tray = document.querySelector('.icon_tray');



emo.addEventListener('click', function(){
    tray.style.cssText = "width:0; opacity:0;";
});
like.addEventListener('click', function(){
    tray.style.cssText = "width:100%; opacity:1;";
});
