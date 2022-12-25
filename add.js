//function to add a series of numbers by taking inputs from index.html
var str1 = document.getElementById('num1');
// var str2 = document.getElementById('num2');
var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var resetBtn = document.getElementById('reset');
var resetMsg = document.getElementById('reset-msg');
var yesBtn = document.getElementById('yes-btn');
var noBtn = document.getElementById('no-btn');
var submitBtn = document.getElementById('submit');
var numbersList = document.getElementById('numbers-list')
var resultBox = document.getElementById('result')
var numbers = [];

addBtn.addEventListener('click', () => {
    numbers.push(str1.value);
    removeBtn.removeAttribute('disabled');
    resetBtn.removeAttribute('disabled');
    submitBtn.removeAttribute('disabled');
    numbersList.innerHTML = `<h2>The numbers entered are ${numbers}.</h2>`
})

removeBtn.addEventListener('click', () => {
    const lastItem = numbers[numbers.length - 1]
    numbers.pop();
    if (numbers[0] == undefined){
        removeBtn.disabled = true;
        resetBtn.disabled = true;
        submitBtn.disabled = true;
    }
    numbersList.innerHTML = `<h2>You removed ${lastItem}.</h2>`
})

resetBtn.addEventListener('click', () => {
    resetMsg.classList.toggle('active');
        yesBtn.addEventListener('click', () => {
            numbers = []
            numbersList.innerHTML = `<h2>You have reset the set of numbers.</h2>`
            resetMsg.classList.remove('active');
            removeBtn.disabled = true;
            resetBtn.disabled = true;
            submitBtn.disabled = true;
        })

        noBtn.addEventListener('click', () =>{
            resetMsg.classList.remove('active');
        })
})

submitBtn.addEventListener('click', function (){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++){
        sum += parseInt(numbers[i]);
    }
    resultBox.innerHTML = `<h2>The sum of the numbers is: ${sum}</h2> `;
    numbers = []
    removeBtn.disabled=true;
    resetBtn.disabled=true;
    submitBtn.disabled=true;
}
);


// class Thermostat{
//     constructor(temperature){
//       this.temp = temperature;
//     }
  
//     get temperature(){
//       return this.temp;
//     }
  
//     set temperature(celTemp){
//         this.temp = (celTemp * 9/5) + 32;
//     }
//   }
//   // Only change code above this line
  
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   console.log(thermos.temperature)
//   let temp = thermos.temperature; // 24.44 in Celsius
//   console.log(temp)
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius
//   console.log(temp)