// ############## Calorie App/Equations ############## // 
// Global Scope
let total; 
// DOM 
    const calculateLess = document.getElementById("lossCalc");
    calculateLess.addEventListener('click', calculateLoss);
//
    const calculate = document.getElementById("calc");
    calculate.addEventListener('click', calculateCals);
// CALC FUNCTION
    function calculateCals() {
        let input1 = parseFloat(document.getElementById("weight").value);
        let input2 = parseFloat(document.getElementById("height").value);
        let input3 = parseFloat(document.getElementById("age").value);
// GENDER 
    if (document.getElementById("female").checked) {
    total = 655.1 + (9.57 * input1) + (1.85 * input2) - (4.68 * input3);
    } else {
    total = 66.5 + (13.75 * input1) + (5.00 * input2) - (6.76 * input3);
    }
// ACTIVITY   
if (document.getElementById("sedentary").checked) {
    total *= 1.2;
    } else if (document.getElementById("somewhat").checked) {
    total *= 1.375;
    } else if (document.getElementById("moderately").checked) {
    total *= 1.55;
    } else if (document.getElementById("very").checked) {
    total *= 1.725;
    } else {
    total *= 1.9;
}
// Remove Decimals 
    total = Math.ceil(total);
    document.getElementById("result").innerHTML = " " + "you would need " + total + " calories per day";
}
// Function to calculate calories for weight loss
    function calculateLoss() {
    let lossTotal = total - 500;
    document.getElementById("result2").innerHTML = " " + "you would need " + lossTotal + " calories per day";
}
//#########END-OF-PROGRAM#########################//
