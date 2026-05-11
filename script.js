const description = document.getElementById("description")
const name = document.getElementById("name")
const desctext = document.getElementById("desctext")
const changeimage = document.getElementById("changeimage")
const next = document.getElementById("next")

let displayState = 0;

function changeProject(){
  desctext.textContent = "This is the description for project 1"
  let cs = (displayState%2).toString()
  changeimage.document.body.style.src = `project${cs}.png`
  displayState += 1
};

next.addEventListener("click", changeProject);
