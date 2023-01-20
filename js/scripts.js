function handleFormSubmission(event) {
  event.preventDefault();

  let input = parseInt(document.querySelector("input#number").value)
  let numbers = []

  for(let index = 1; index <= input; index += 1) {
    numbers.push(" " + index)
  }
  

  document.getElementById("answer").innerText = numbers;
}



window.addEventListener("load", function() {
  const form = document.getElementById("question");
  form.addEventListener("submit", handleFormSubmission);
});