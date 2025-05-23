'use strict';

const modal = document.querySelector(".modal");
const btnClose=document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal =function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal =function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for(let i=0 ; i< btnsOpenModal.length ; i++){
btnsOpenModal[i].addEventListener("click",openModal)
}

btnClose.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);


document.addEventListener("keydown" , function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal()
    }
})