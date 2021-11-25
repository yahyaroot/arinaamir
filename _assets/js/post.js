let comment = [];
let name = document.getElementById("nama");
let email = document.getElementById("email");
let message = document.getElementById("komen");
let messageBox = document.getElementById("display");

insert = () => {
  // You can push these all at once
  comment.push(
    `Nama :${name.value}`,
    `Email : ${email.value}`,
    `Message : ${message.value}`);
  clearAndShow();
}

clearAndShow = () => {
  name.value = "";
  email.value = "";
  message.value = "";
  messageBox.innerHTML = "";
  messageBox.innerHTML += " " + comment.join("<br/>") + "<br/>";
}
// remove this
document.querySelector('form[name=RegForm]').onsubmit = e => {
  e.preventDefault();
}