var calcBtn = document.getElementById('calc-btn');



calcBtn.addEventListener('click', function(){
    // salvo input nome 
    var getBurgerName = document.getElementById('burger-name');

    var burgerName = getBurgerName.value;

    // validazione nome 
    if (burgerName.length == 0){
        alert("Inserisci un nome!")
    } else{

        var prezzoFinale = 50;

        // mettere le opzioni check in un array 
        var optionsCheckboxes = document.getElementsByClassName('checkbox-input');

        // scorrere l'array per verificare se checked o no
        for ( var i = 0; i < optionsCheckboxes.length; i++){
            var thisCheckbox =  optionsCheckboxes[i];
            // se sono checkate, aggiungere value al prezzobase 
            if( thisCheckbox.checked == true){

                var addOnPrice = parseInt(thisCheckbox.value);
                prezzoFinale += addOnPrice;
            }
        }

        // creare array codici sconto
        var coupons = ["DISCOUNT10", "OFF10", "LUCKYCUSTOMER"]

        // salvare input discount utente 
        var getUserCoupon = document.getElementById('discount-input');

        var userCoupon = getUserCoupon.value;

        // verificare se l'input utente e' uguale a un codice sconto
        // ed eventualmente applicare scontistica 

        var codeMatch = coupons.includes(userCoupon)

        if (codeMatch == true){
                prezzoFinale = prezzoFinale - (prezzoFinale * 0.1);
        }

        // stampa 
        document.getElementById('final-price').innerHTML = prezzoFinale + ' €';
    }
})

