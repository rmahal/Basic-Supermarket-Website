function showContent(event){
    var tagClicked = event.target.innerHTML;

    killChildrenOfDiv();

   // var shoppingDiv = document.getElementsByClassName("shoppingContent");
   var cereals = [{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""}];
   
   var juices = [{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""}];
   
   var candies = [{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""},{name: "" , image: ""}];


    createCard("hi","hello");
}



function killChildrenOfDiv(){

    var shoppingDiv = document.getElementById("shoppingContent");
    while (shoppingDiv.firstChild) {
        shoppingDiv.removeChild(shoppingDiv.firstChild);
    }

}



function createCard(name, image){

   var image = document.createElement("img");
   var anchTag = document.createElement("a");
   var anchTagTextNode = document.createTextNode("SKITTLES");
   anchTag.innerHTML = "Hello";
   anchTag.appendChild(anchTagTextNode);
   var t = document.createTextNode(anchTag);
   image.appendChild(t);
   document.getElementById("shoppingContent").appendChild(image);
}