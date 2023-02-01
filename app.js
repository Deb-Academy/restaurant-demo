let bill, starter, main, dessert, salad, drink,
starterItem, starterPrice, mainItem, mainPrice, 
dessertItem, dessertPrice, saladItem, saladPrice,
drinkItem, drinkPrice, initialPrice, totalPrice;

bill = document.getElementById("bill");
starter = document.getElementById("starter");
main = document.getElementById("main");
dessert = document.getElementById("dessert");
salad = document.getElementById("salad");
drink = document.getElementById("drink");
totalPrice = document.getElementById("totalPrice");
initialPrice = 0;
totalPrice.innerHTML = `$${initialPrice}.00`;

const menuPrices = {
    starter: 5,
    main: 20,
    drink: 2,
    dessert: 10,
    salad: 10
}

starter.addEventListener("change", function() {
    starterItem = document.getElementById("starterItem");
    starterPrice = document.getElementById("starterPrice");
    starterItem.innerHTML = starter.value;
    starterPrice.innerHTML = `$${menuPrices.starter}.00`;
    initialPrice += menuPrices.starter;
    totalPrice.innerHTML = `$${initialPrice}.00`;
    bill.innerHTML = `$${initialPrice}.00`;
});

main.addEventListener("change", function() {
    mainItem = document.getElementById("mainItem");
    mainPrice = document.getElementById("mainPrice");
    mainItem.innerHTML = main.value;
    mainPrice.innerHTML = `$${menuPrices.main}.00`;
    initialPrice += menuPrices.main;
    totalPrice.innerHTML = `$${initialPrice}.00`;
    bill.innerHTML = `$${initialPrice}.00`;
});

dessert.addEventListener("change", function() {
    dessertItem = document.getElementById("dessertItem");
    dessertPrice = document.getElementById("dessertPrice");
    dessertItem.innerHTML = dessert.value;
    dessertPrice.innerHTML = `$${menuPrices.dessert}.00`;
    initialPrice += menuPrices.dessert;
    totalPrice.innerHTML = `$${initialPrice}.00`;
    bill.innerHTML = `$${initialPrice}.00`;
});

drink.addEventListener("change", function() {
    drinkItem = document.getElementById("drinkItem");
    drinkPrice = document.getElementById("drinkPrice");
    drinkItem.innerHTML = drink.value;
    drinkPrice.innerHTML = `$${menuPrices.drink}.00`;
    initialPrice += menuPrices.drink;
    totalPrice.innerHTML = `$${initialPrice}.00`;
    bill.innerHTML = `$${initialPrice}.00`;
});

salad.addEventListener("change", function() {
    saladItem = document.getElementById("saladItem");
    saladPrice = document.getElementById("saladPrice");
    saladItem.innerHTML = salad.value;
    saladPrice.innerHTML = `$${menuPrices.salad}.00`;
    initialPrice += menuPrices.salad;
    totalPrice.innerHTML = `$${initialPrice}.00`;
    bill.innerHTML = `$${initialPrice}.00`;
});


