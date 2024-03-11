// const button = document.getElementsByClassName("pressBtn");
// const queryButton = document.querySelector(".pressBtn");
// const queryAllButton = document.querySelectorAll(".pressBtn");

// console.log(button);
// console.log(typeof queryButton);
// console.log(typeof queryAllButton);

// function handlePress()  {
//     console.log("Knopka najata");
// }

// queryButton.addEventListener("click", handlePress);

// const input = document.querySelector(".inp");
// console.log(input);

// input.addEventListener("keyup", function (event){
//     if (event.key === "Enter"){
//         console.log(input.value);
//         input.value = null;
//     }
// });

// const hide = document.querySelector(".hide");
// const show = document.querySelector(".show");
// const box = document.querySelector(".box");

// hide.addEventListener("click", () =>{
//     box.classList.add("hidden");
// })

// document.querySelector(".show").addEventListener("click", ()=>{
//     document.querySelector(".box").classList.remove("hidden");
// })

const box = document.querySelector(".box");
function changeColor(){
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

box.addEventListener("click", changeColor);     