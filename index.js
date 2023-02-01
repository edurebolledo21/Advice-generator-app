const btn = document.querySelector("#btn-pass");
const span = document.querySelector("p");
const parrafo = document.querySelector("h3");

const getAdvice = async () => {
  const { slip } = await (await fetch("https://api.adviceslip.com/advice", { method: "GET" })).json();
  const { id, advice } = slip;
  span.innerHTML = `ADVICE #${id}`;
  parrafo.innerHTML = advice;
};
getAdvice();

btn.addEventListener("click", getAdvice);
