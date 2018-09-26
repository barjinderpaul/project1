var form  = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter  = document.getElementById("filter");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var flag=0;
var button = document.getElementById("clear-btn");
var ul = document.querySelector("ul");
localStorage.setItem('items',JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
var css= document.getElementsByTagName("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyy = document.getElementById("gradient");

//Form submit event;

form.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);
filter.addEventListener("keyup",filterItems);
button.addEventListener("click",function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
})
window.onload=function(){
    document.getElementById("h2").innerHTML="JSON.parse(localStorage.getItem('items'))";
}

function addItem(e){
    e.preventDefault(); 
    var newItem = document.getElementById('item');
    if(newItem.value != ""){
    //create new li;
    var li = document.createElement("li");
    li.className="list-group-item";

    //add Text node with input value;   
    li.appendChild(document.createTextNode(newItem.value));

    //Create Del button;
    var deleteBtn = document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("x"));
    li.appendChild(deleteBtn);

    //Create Cancel Button ;
    var CancelBtn = document.createElement("button");
    CancelBtn.className="btn btn-danger btn-sm float-right mr-4 line-through";
    CancelBtn.appendChild(document.createTextNode("Toggle cancel"));
    li.appendChild(CancelBtn);

    itemList.appendChild(li);
    console.log("Element Added");

    //Pushing to local storage;
        itemsArray.push(newItem.value);
        localStorage.setItem('items',JSON.stringify(itemsArray));
        console.log("pushed into local storage");
        console.log(localStorage.getItem('items'));

    newItem.value="";
    }
    else{
        alert("Enter some value");
    }
}

function removeItem(e){
  //  console.log("!");
    if(e.target.classList.contains("delete")){
        console.log("Del");
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            console.log("Item Removed");
            localStorage.removeItem('itemsvalueasd');
            console.log(localStorage.removeItem('li'));
            
        }
    }
    if(e.target.classList.contains("line-through")){
            e.preventDefault();
            if(flag == 0){
                if(confirm("cancel ?")){
                console.log("line");
                var li = e.target.parentElement;
                li.classList.toggle("line");
                console.log("done line");
                flag = 1;
            
                console.log("changed");
                }
            }
           else if(flag == 1){
                if(confirm("Uncancel ?")){
                var li = e.target.parentElement;
                li.classList.toggle("line");
                flag=0;
                }     
        }
    }
}
  


function filterItems(e){
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display ="block";
        }
        else{
            item.style.display ="none";
        }
    })
}

//Events for input ;
function setGradient(){
    bodyy.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);  
color2.addEventListener("input",setGradient);