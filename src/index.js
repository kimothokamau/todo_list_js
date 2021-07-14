import './style.css';
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("li");

for (let i =0; myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode(" ");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i=0; i<close.length; i++) {
  close[i].addEventListener('click', function() {
    let div = this.parentElement;
    div.style.display = "none";
  })
}

// Add a "checked" class when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagname === 'li') {
    event.target.classList.toggle('checked');
  }
  
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  var inputValue = document.getElementById("myInput").nodeValue;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  }
  else {
    document.getElementById("myUL").appendChild(li);

  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i=0; i<close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
