//your JS code here. If required.
const incrementBtn = document.getElementById("incrementBtn");
const counterElement =  document.querySelector("#counter");

let counterValue = 0;
    function handleIncrement() {
      alert(counterValue);
      counterValue++;
      counterElement.textContent = counterValue;
    }
    incrementBtn.addEventListener('click', handleIncrement);
