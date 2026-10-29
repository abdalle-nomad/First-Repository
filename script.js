const helloButton = document.querySelector("#helloButton");
const themeButton = document.querySelector("#themeButton");
const addButton = document.querySelector("#addButton");
const message = document.querySelector("#message");
const thingsList = document.querySelector("#thingsList");

helloButton.addEventListener("click", () => {
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  message.textContent = `${greeting}! Thanks for visiting.`;
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkModeOn = document.body.classList.contains("dark");
  themeButton.textContent = darkModeOn ? "Use light theme" : "Change theme";
});

addButton.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `A new idea (${thingsList.children.length + 1})`;
  thingsList.append(item);
});
