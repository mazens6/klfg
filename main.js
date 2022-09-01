let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');


window.onload = function(){
    if(window.navigator.online){
        online()
    }else{
        offline()
    }

}
window.addEventListener("online",function(){
    online();
});
window.addEventListener("offline",function(){
    offline();
});

function online(){
     title.innerHTML = 'Online now';
     title.style.color = 'green';
     ul.classList.add('hide');
     reload.classList.add('hide');
}


function offline(){
    title.innerHTML = 'offline now';
     title.style.color = 'blue';
     ul.classList.remove('hide');
     reload.classList.remove('hide');
}
