let price = 50;
let coupons = ['6QY1NE6X0EE', 'ERENNKFKOBC','H4YF13TPF0K','OJKG8Q2BGOW','9MKOHYQEG3F','2EZNM1FK30U','51DU6AAP2GP','V7NSIDB0DIW','GDR8JQAMF3C', 'VGIZYY3UF0J'];
console.log(coupons);
couponDiscount = 0.8 //20% di sconto
var calculate = document.getElementById('calculate').addEventListener('click',
    function() {
        let burgerName = document.getElementById('myBurger').value;
        console.log(burgerName);
        let cheese = document.getElementById('checkbox-cheese').checked;
        let tomato = document.getElementById('checkbox-tomato').checked;
        let egg = document.getElementById('checkbox-egg').checked;
        let lettuce = document.getElementById('checkbox-lettuce').checked;
        let mustard = document.getElementById('checkbox-mustard').checked;
        let ketchup = document.getElementById('checkbox-ketchup').checked;
        let coupon = document.getElementById('coupon').value
        // aggiunte al prezzo
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
        if(burgerName === '')
            return document.getElementById('nameMyBurger').innerHTML = 'Create Your Burger', alert('inserisci un nome per il tuo hamburger'), document.getElementById('price').innerHTML = '$ ' + 50;
        if(coupons.includes(coupon) === true) {
            price = (price * couponDiscount).toFixed(2);
            coupons.splice(coupon.indexOf(coupon), 1);
        }
        else
            alert('il suo coupon non è valido, il prezzo sarà calcolato normalmente')
        document.getElementById('price').innerHTML = '$ ' + price;//calcolo del prezzo
        document.getElementById('nameMyBurger').innerHTML = burgerName;//posiziono nome hamburger nel titolo
        console.log(coupons); //coupon rimanenti
        price = 50; //reset del prezzo



    }
)

//functions
