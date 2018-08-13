function showContent(event){
    var tagClicked = event.target.innerHTML;

    killChildrenOfDiv();

   // var shoppingDiv = document.getElementsByClassName("shoppingContent");
   var candies = [{name: "Kit Kat's" , image: "./images/candy/kit-kat.jpg"},{name: "M & M's" , image: "./images/candy/m&ms.jpg"},{name: "Skittles" , image: "./images/candy/skittles.jpg"},{name: "Snickers" , image: "./images/candy/snickers.jpg"},{name: "Twix" , image: "./images/candy/twix.jpg"}];
   
   var juices = [{name: "Apple Juice" , image: "./images/juice/apple-juice.jpg"},{name: "Carrot Juice" , image: "./images/juice/carrot-juice.jpg"},{name: "Grape Juice" , image: "./images/juice/grape-juice.jpeg"},{name: "Orange Juice" , image: "./images/juice/orange-juice.jpg"},{name: "Tomato Juice" , image: "./images/juice/tomato-juice.jpg"}];
   
   var cereals = [{name: "Cheerios" , image: "./images/cereal/cheerios.jpg"},{name: "Crunch" , image: "./images/cereal/crunch.jpg"},{name: "Fruit Loops" , image: "./images/cereal/fruit-loops.jpg"},{name: "Puffs" , image: "./images/cereal/puffs.jpg"},{name: "Raisin Bran" , image: "./images/cereal/raisin-bran.jpg"}];



    var card ;
    var deleteButton;
    var item ;

    
    if(tagClicked==="Cereal"){
        
        for(let i=0; i<cereals.length; i++){
        card = document.createElement("a");
        card.innerHTML = `<div><img src="${cereals[i].image}"><div class="container"><p class="foodItem">${cereals[i].name}</p></div></div>`
        card.classList.add("card");
        
        
        card.addEventListener('click', function(e) {
            item = document.createElement("p");
            item.innerHTML = cereals[i].name;
            document.getElementById("cartList").appendChild(item);
        });
        
        document.getElementById("shoppingContent").appendChild(card);

    }
    }else if(tagClicked==="Juices"){
            
        for(let i=0; i<juices.length; i++){
            card = document.createElement("a");
            card.innerHTML = `<div><img src="${juices[i].image}"><div class="container"><p class="foodItem">${juices[i].name}</p></div></div>`
            card.classList.add("card");
            
            
            card.addEventListener('click', function(e) {
                item = document.createElement("p");
                item.innerHTML = juices[i].name;
                document.getElementById("cartList").appendChild(item);
            });
            
            
            
            document.getElementById("shoppingContent").appendChild(card);
        }

    }else if(tagClicked==="Candy"){
        
        for(let i=0; i<candies.length; i++){
            card = document.createElement("a");
            card.innerHTML = `<div><img src="${candies[i].image}"><div class="container"><p class="foodItem">${candies[i].name}</p></div></div>`
            card.classList.add("card");
            
            
            card.addEventListener('click', function(e) {
                item = document.createElement("p");
                item.innerHTML = candies[i].name;
                document.getElementById("cartList").appendChild(item);
            });

            
            
            document.getElementById("shoppingContent").appendChild(card);
        }
    }
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