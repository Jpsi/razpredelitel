const button = document.getElementById("button");

const clickHandler = () => {
  const textarea = document.getElementById("textarea");
  const result = document.getElementById("result");
  result.innerHTML = textarea.value;
}

button.addEventListener('click', clickHandler);

