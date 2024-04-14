const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNumerals = [
    {1000: 'M'}, 
    {900: 'CM'}, 
    {500: 'D'}, 
    {400: 'CD'}, 
    {100: 'C'}, 
    {90: 'XC'}, 
    {50: 'L'}, 
    {40: 'XL'}, 
    {10: 'X'}, 
    {9: 'IX'}, 
    {5: 'V'}, 
    {4: 'IV'}, 
    {1: 'I'},
]

convertBtn.addEventListener('click', () => checkInput(input.value))
input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        checkInput(input.value);
    }    
})

const checkInput = (input) => {
    input = parseInt(input);
    
    if (!input) {
        output.textContent = "Please enter a valid number";
        output.classList.add('red');
    } else if (input < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.add('red');
    } else if (input >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.classList.add('red');
    } else {
        output.classList.remove('red');
        output.textContent = `${convertToRomanNumeral(input)}`;
    }
}

const convertToRomanNumeral = (input) => {
    let result = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        const numeral = Object.keys(romanNumerals[i])[0];
        const roman = romanNumerals[i][numeral];

        while (input >= numeral) {
            result += roman;
            input -= numeral;
        }
    }

    return result;
}