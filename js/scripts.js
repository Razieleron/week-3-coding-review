function misterRoboger(event) {
  event.preventDefault();

  let input = parseInt(document.querySelector("input#number").value)
  let numbers = []


  document.getElementById("answer").innerText = numbers;
}



window.addEventListener("load", function() {
  const form = document.getElementById("question");
  form.addEventListener("submit", misterRoboger);
}); 
