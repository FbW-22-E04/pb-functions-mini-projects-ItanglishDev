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



// The Temperature Converter