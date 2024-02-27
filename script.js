let message = document.getElementById('message')
function changeLight() {
  const color = ["red", "green", "yellow"];
  let index = Math.floor(Math.random() * 3);
  let pickColor = color[index];

  for (const i of color) {
    let chosen = document.getElementById(i);
    let borderColor = document.getElementById('borderColor')
    if (i === pickColor) {
      chosen.classList.add(`bg-${i}-500`);
      borderColor.classList.add(`border-${i}-500`);
      message.classList.add(`border-${i}-500`)
      
    } else {
      chosen.classList.remove(`bg-${i}-500`);
      borderColor.classList.remove(`border-${i}-500`);
      message.classList.remove(`border-${i}-500`)
    }
  }

switch (pickColor) {
case "red":
message.textContent = "Stop , it's RED;"
break;

case "green":
message.textContent = "Go Now , it's GREEN;"
break;

case "yellow":
message.textContent = "Slow Down , it's YELLOW;"
break;


default:
break;
}

}
changeLight();
setInterval(changeLight, 2000);