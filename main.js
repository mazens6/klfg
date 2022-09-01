let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let roload = document.querySelector('.roload');


window.onload = function(){
    if(window.navigator.online){
        online()
    }else{
        offline()
    }

}
window.addEventListener('online',function(){
    online();
})
window.addEventListener('offline',function(){
    offline();
})

function online(){
     title.innerHTML = 'Online now';
     title.style.color = 'green';
     ul.classList.add('hide');
     roload.classList.add('hide');
}


function offline(){
    title.innerHTML = 'offline now';
     title.style.color = 'yellow';
     ul.classList.remove('hide');
     roload.classList.remove('hide');
}
