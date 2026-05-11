const description = document.getElementById("description")
const name = document.getElementById("name")
const desctext = document.getElementById("desctext")
const changeimage = document.getElementById("changeimage")
const next = document.getElementById("next")

let displayState = 0;

function changeProject;
  desctext.textContent = "This is the description for project 1"
  let var = "project"+ (displayState+1).twoString()
  let varnext =
