function updateRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rate;
}

function compute() {

    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a positive amount.");
        document.getElementById("principal").focus();
        return;
    }

    if (isNaN(years) || years <= 0) {
        alert("Please enter valid number of years.");
        document.getElementById("years").focus();
        return;
    }

    var interest = (principal * rate * years) / 100;
    var amount = (principal + interest).toFixed(2);

    var year = new Date().getFullYear() + years;

    document.getElementById("result").innerHTML =
        "If you deposit <mark>$" + principal + "</mark>,<br>" +
        "at an interest rate of <mark>" + rate + "%</mark>,<br>" +
        "You will receive <mark>$" + amount + "</mark><br>" +
        "in the year <mark>" + year + "</mark>.";
}