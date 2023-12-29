//your JS code here. If required.
const button = document.getElementById("btn");
const para =  document.querySelector("p");

let count = 0;
button.addEventListener("click", ()=>{
	count++;
	para.innerText = count;
});