window.onload = function(){
  alert("time is rgb");
  document.getElementsByClassName("ct1")[0].setAttribute("class","red bordering rigbor");
  document.getElementsByClassName("ct2")[0].setAttribute("class","green bordering botbor");
  document.getElementsByClassName("ct3")[0].setAttribute("class","blue bordering rigbor botbor");
  let newElem = document.createElement("p");
  newElem.innerText = "<p>new</p>";
Text.before(newElem);
}