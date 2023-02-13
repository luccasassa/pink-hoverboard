const container = document.getElementById("container");
const squares = 1296;
const colors = ["#fae0e4", "#f7cad0", "#f9bec7", "#fbb1bd", "#ff99ac", "#ff85a1", "#ff7096", "#ff5c8a", "#ff477e", "#ff0a54"];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setBgColor = (elem) => {
  const randColor = randomColor();
  elem.style.backgroundColor = randColor;
  elem.style.boxShadow = `0 0 2px ${randColor}, 0 0 10px ${randColor}`;
};

const removeBgColor = (elem) => {
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShadow = "0 0 2px #000";
};

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setBgColor(square));
  square.addEventListener("mouseout", () => removeBgColor(square));

  container.appendChild(square);
}
