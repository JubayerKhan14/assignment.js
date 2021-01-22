

//kilometer to meter conversion

function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        console.log("Distance can not have negative value");
        return "Put right value";
    }

    var meter = kilometer * 1000;
    return meter;

}

//budget calculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        console.log("You can't use a negative value");
        return "Put right value";
    }
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;

    return totalPrice;

}

// hotel cost

function hotelCost(day) {

    var totalCost = 0;
    if (day <= 10) {
        var totalCost = day * 100;

    }
    else if (day <= 20) {

        var cost1 = 10 * 100;
        var remainingDay = day - 10;
        var cost2 = remainingDay * 80;
        totalCost = cost1 + cost2;

    }

    else {
        var cost1 = 10 * 100;
        var cost2 = 10 * 80;
        var remaingDay = day - 20;
        var cost3 = remaingDay * 50;
        totalCost = cost1 + cost2 + cost3;

    }

    return totalCost;

}

//mega friend

function megaFriend(names) {
    //You have to pass an array of strings as parameter   
    var maxWord = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element > maxWord) {
            maxWord = element;
        }

    }
    return maxWord;
}










