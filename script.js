function convert1() {

    var cel = document
        .getElementById("C")
        .value;

    var C = (cel - 32) * (5 / 9);

    var result1 = document
        .getElementById("result1")
        .innerHTML = ` The given Fahrenhiet value  is= <span class="hitting">${cel} </span> and the Celsius is = <span class="letting"> ${C} <span> °C`;

}

function convert2() {

    var Fah = document
        .getElementById("F")
        .value;

    var F = (Fah * 9 / 5) + 32;

    var result2 = document
        .getElementById("result2")
        .innerHTML = ` The given Celsius value  is= <span class ="hitting">${Fah} </span> and the Fahrenhiet is = <span class="letting">${F}<span> °F`;

}

function reset1() {

    var cels = document
        .getElementById("C")
        .value = "";

}

function reset2() {

    var cels = document
        .getElementById("F")
        .value = "";

}