function handleFormSubmission(event) {
  event.preventDefault();

  let input = parseInt(document.querySelector("input#number").value)
  let numbers = []

  for(let index = 0; index <= input; index += 1) {
    let indexString = index.toString();
    if (indexString.includes(3)) {
      numbers.push(" Won't you be my neighbor");
    } else if (indexString.includes(2)) {
      numbers.push(" Boop!");
    } else if (indexString.includes(1)) {
      numbers.push(" Beep!");
    } else {
      numbers.push(" " + indexString)
  }
}

  document.getElementById("answer").innerText = numbers;
}



window.addEventListener("load", function() {
  const form = document.getElementById("question");
  form.addEventListener("submit", handleFormSubmission);
}); 
