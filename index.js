// The Fortune Teller

function fortuneTeller(numOfChildren, partnerName, location, jobTitle) {
    console.log('You will be a', jobTitle, 'in', location, 'and married to', partnerName, 'with', numOfChildren, 'kids');
}

fortuneTeller(3, 'Mantis', 'North Pole', 'fashion Queen')


// The Puppy Age Calculator
function puppyAgeCalculator(puppyAge) {

    let ageConverter = puppyAge * 7;
    console.log('Your doggie is', ageConverter, 'years old in dog years!')
}
puppyAgeCalculator(5)


// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
    const maxAge = 75;
    let yearsLeft = maxAge - age;
    const restOfLife = Math.ceil(yearsLeft * 365.25 * amountPerDay);
    console.log('You will need', restOfLife, 'to last you until the ripe age of', maxAge);

}

calculateSupply(35, 1.2)


// The Geometrizer
function calcCircumference(radius) {
    let circumference = 3.14 * radius * 2;
    console.log('The circumference is', circumference);
}
calcCircumference(3)

function calcArea(radius) {
    let area = 3.14 * (radius ** 2);
    console.log('The area is', area);
}

calcArea(3)


// The Temperature Converter


function celsiusToFahrenheit(celsiusTemperature) {
    // Divide by 5, then multiply by 9, then add 32
    let farhenHeitTemperature = celsiusTemperature / 5 * 9 + 32
    console.log(celsiusTemperature, '°C is', farhenHeitTemperature, '°F');
}

celsiusToFahrenheit(30)

function fahrenheitToCelsius(fahrenheitTemperature) {
    // Deduct 32, then multiply by 5, then divide by 9
    let celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
    console.log(fahrenheitTemperature, '°F is', celsiusTemperature, '°C ',);
}

fahrenheitToCelsius(86)