document.addEventListener('DOMContentLoaded', function () {

let click = document.createElement('div'); 
document.body.appendChild(click);

function updateClick(event) {
    let clickX = event.clientX;
    let clickY = event.clientY;

    let Time = new Date().toLocaleTimeString();


    
    click.innerHTML =`Time: ${Time}<br>Y :${clickY}<br> X : ${clickX}` 

}

document.body.addEventListener('click', updateClick);
});

