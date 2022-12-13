import {MiniMaple} from "./miniMaple.js";

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('submitButton').onclick = miniMapleDiff;
}

function miniMapleDiff(){
    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    const F = document.getElementById('diffInput').value
    let miniMaple = new MiniMaple()
    let f= miniMaple.calculateDiff(F)
    someDummyDiv.innerHTML = `Результат: ${f}`;
    const container = document.getElementById('container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.appendChild(someDummyDiv);
}