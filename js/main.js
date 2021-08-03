let price = 50;
var calculate = document.getElementById('calculate').addEventListener('click',
    function() {
        let cheese = document.getElementById('checkbox-cheese').checked;
        let tomato = document.getElementById('checkbox-tomato').checked;
        let egg = document.getElementById('checkbox-egg').checked;
        let lettuce = document.getElementById('checkbox-lettuce').checked;
        let mustard = document.getElementById('checkbox-mustard').checked;
        let ketchup = document.getElementById('checkbox-ketchup').checked;
        if(cheese === true)
            price += 3;
        if(tomato === true)
            price += 4;
        if(egg === true)
            price += 5;
        if(lettuce === true)
            price += 1;
        if(mustard === true)
            price += 2;
        if(ketchup === true)
            price += 2;
        document.getElementById('price').innerHTML = '$ ' + price;


    }
)

//functions
