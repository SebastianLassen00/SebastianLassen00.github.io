let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    let myAlt = myImage.getAttribute('alt');
    if(mySrc === 'images/pikachu.png'){
        myImage.setAttribute('src', 'images/pikachuChristmas.png');
        myImage.setAttribute('alt', 'Pikachu-Dio mashup with a christmas hat');
    } else{
        myImage.setAttribute('src', 'images/pikachu.png');
        myImage.setAttribute('alt', 'Pikachu-Dio mashup');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Sebastian\'s homepage, ' + storedName;
}

myButton.onclick = function(){
    setUserName;
}

function setUserName(){
    let myName = prompt('Please enter your name.');
    
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to Sebastian\'s homepage, ' + myName;
    }
}


/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function(){
    alert('Ouch! Stop poking me!');
} */