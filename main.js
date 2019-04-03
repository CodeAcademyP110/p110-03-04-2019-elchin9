"use strict";


const userInput = document.querySelector('input.username');
const menu = document.querySelector('.menu');

userInput.onkeydown = function(e)
{
	const content = this.value.trim();

    if(e.keyCode === 13)
    {
        if(content === "") return; 

        const el = [...menu.children].find(li => li.innerText === content);
        
        if(el !== undefined) 
        {
            userInput.nextElementSibling.classList.remove("d-none");

            return;

        }

        const tagLi = document.createElement('li');
        tagLi.className = "bg-info tags";
        tagLi.innerText = content;

        const icon = document.createElement('i');
        icon.className = "fas fa-times remove";

        icon.onclick = function(){ this.parentElement.remove(); }
        
        userInput.value = "";

        tagLi.appendChild(icon);
        menu.appendChild(tagLi);
        
    };
};