document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("input").addEventListener("click", function () {
        var nextFood = new Food(
            document.getElementById("fName").value,
            document.getElementById("calories").value,
            document.getElementById("num").value,
            
        );
       if(nextFood.isValid()) {
            foodList.push(nextFood);
            displayFoods();
            clear(); 
       }
        
        else {
            document.getElementById("cal").innerHTML = "Sorry, invalid input data"
        }
    
    });
    
    document.getElementById("clear").addEventListener("click", clear);
        

    function clear() {
        document.getElementById("fName").value = "";
        document.getElementById("calories").value = "";
        document.getElementById("num").value = "";
        
        document.getElementById("fName").focus();
    }

    var foodList = [];
    
    var displayFoods = function () {
    var displayString = "";
    var caroliesTotal = 0;

        for (var i in foodList) {     
        displayString += foodList[i];  
        caroliesTotal += foodList[i].calculate();    
    }
    
        var node = document.createElement("li"); 
        node.innerHTML = foodList[i].fName + ", " + foodList[i].calories + ", " + foodList[i].num 
        document.getElementById("fdList").appendChild(node);
        document.getElementById("cal").innerHTML = "You have consumed " + caroliesTotal + " calories.";
};
    
    
});
