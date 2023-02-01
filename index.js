const btn = document.querySelector("#btn-pass");
const span = document.querySelector(".number");
const parrafo = document.querySelector("h3");

const getAdvice = async () => {
  const { slip } = await (await fetch("https://api.adviceslip.com/advice", { method: "GET" })).json();
  const { id, advice } = slip;
  span.innerHTML = `${id}`;
  parrafo.innerHTML = `${advice}`;
};
getAdvice();

btn.addEventListener("click", async (e) => {
  const { slip } = await (await fetch("https://api.adviceslip.com/advice", { method: "GET" })).json();
  const { id, advice } = slip;
  span.innerHTML = `${id}`;
  parrafo.innerHTML = `${advice}`;
});
