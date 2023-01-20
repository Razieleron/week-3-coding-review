function handleFormSubmission(event) {
  event.preventDefault();

  let input = document.getElementById("number");

  if (input === 1) {
    output = "ayyy we did it";
  }

  document.getElementById("output").innerText = output;
}



window.addEventListener("load", function() {
  const form = document.getElementById("question");
  form.addEventListener("submit", handleFormSubmission);
});