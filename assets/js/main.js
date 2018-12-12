var fragment = document.createDocumentFragment();
var searchNode  = document.getElementById('search-node');
searchNode.onmousedown = function(e) {
  var coords = getCoords(searchNode);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;
  moveAt(e);
 searchNode.style.zIndex = 1000;
	function moveAt(e) {
    searchNode.style.left = e.pageX - shiftX + 'px';
    searchNode.style.top = e.pageY - shiftY + 'px';
  }
  document.onmousemove = function(e) {
    moveAt(e);
  }
  searchNode.onmouseup = function() {
    document.onmousemove = null;
    searchNode.onmouseup = null;
  }
  searchNode.ondragstart = function() {
  return false;}

function getCoords(elem) {  
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };}}

var style = document.createElement("style");
style.innerHTML=
`.red {
	border: solid red
}`;
document.body.append(style);

var text = document.createElement("H3");
text.innerHTML="Search node element";

var btnClose = document.createElement("button");
btnClose.style.width = "50px";
btnClose.style.height = "15px";
btnClose.style.background = "red";
btnClose.style.border = "none";

btnClose.addEventListener("click", function(){
searchNode.style.display="none";
});

var inputSearch = document.createElement("input");
inputSearch.style.width = "60%";
inputSearch.style.background="white";

var btnSearch = document.createElement("button");
btnSearch.style.width = "25%";
btnSearch.style.height = "30px";
btnClose.style.borderRadius="30%";
btnSearch.innerHTML="Search";

btnSearch.addEventListener("click", findFirstElement);

var btnPrev = document.createElement("button");
btnPrev.style.width = "25%";
btnPrev.style.height = "30px";
btnPrev.innerHTML="Prev";
btnPrev.disabled = true;

var btnNext = document.createElement("button");
 btnNext.style.width = "25%";
 btnNext.style.height = "30px";
 btnNext.innerHTML="Next";
 btnNext.disabled = true;

var btnParent = document.createElement("button");
btnParent.style.width = "25%";
btnParent.style.height = "30px";
btnParent.innerHTML="Parent";
btnParent.disabled = true;

var btnChild = document.createElement("button");
btnChild.style.width = "25%";
btnChild.style.height = "30px";
btnChild.innerHTML="Child";
btnChild.disabled = true;


fragment.append(text);
fragment.append(btnClose);
fragment.append(inputSearch);
fragment.append(btnSearch);
fragment.append(btnPrev);
fragment.append(btnNext);
fragment.append(btnParent);
fragment.append(btnChild);

searchNode.append(fragment);

function findFirstElement(){

 var firstEl = document.querySelector(inputSearch.value);

  if(firstEl!=""){

  firstEl.classList.add("red");

  inputSearch.value = "";}

  if(firstEl.previousElementSibling=true){

  	btnPrev.disabled=false;};

  if(firstEl.nextElementSibling=true){

  	btnNext.disabled=false;};

  if(parentElement=true){

  	btnParent.disabled=false;

  };

  if(childNodes=true) {

btnChild.disabled=false;}};

btnPrev.addEventListener("click", function(){
let redElement = document.querySelector(".red");

redElement.previousElementSibling.classList.add("red");

redElement.classList.remove("red");	});


btnNext.addEventListener("click", function(){
let redElement = document.querySelector(".red");
redElement.nextElementSibling.classList.add("red");
redElement.classList.remove("red");	});


btnParent.addEventListener("click", function(){
let redElement = document.querySelector(".red");
redElement.parentNode.classList.add("red");
redElement.classList.remove("red");	});


btnChild.addEventListener("click", function(){
let redElement = document.querySelector(".red");
redElement.firstElementChild.classList.add("red");
redElement.classList.remove("red");	
});

//Just check it!



















