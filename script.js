document.getElementById("clickButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "block";
  
  let timer = 5;
  let timerInterval = setInterval(function() {
    if (timer > 0) {
      document.getElementById("timer").innerText = timer;
      timer--;
    } else {
      clearInterval(timerInterval);
      window.open('https://www.google.com', '_blank');  // Redirect to a random site (ads)
    }
  }, 1000);
});
