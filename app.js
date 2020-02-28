function convertTemperature() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let celcius = convertToCelcius(fahrenheit);
    document.getElementById("result").innerHTML = "Celcius: " + celcius + "&ordm;" + "C";
}

function convertToCelcius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}
