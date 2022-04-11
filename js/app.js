function getInputId(cat) {
    const inputId = document.getElementById(cat + '-input');
    return inputId;
}

function getOutputId(cat) {
    const outputId = document.getElementById('total-' + cat);
    return outputId;
}

function balanceCalculate() {
    const income = parseFloat(getInputId('income').value);
    const rentCost = parseFloat(getInputId('rentcost').value);
    const foodCost = parseFloat(getInputId('foodcost').value);
    const clothingCost = parseFloat(getInputId('clothingcost').value);

    const expenseTotal = rentCost + foodCost + clothingCost;
    const totalBalance = income - expenseTotal;

    if (isNaN(income || rentCost || foodCost || clothingCost)) {
        alert('Value is String');
    }
    else  if (income < 0 || rentCost < 0 || foodCost < 0 || clothingCost < 0) {
        alert('Values Cannot Be Negative');
    }
    else if (income < expenseTotal) {
        alert('Your income is less than expenses');
    }
    else {
        getOutputId('expenses').innerText = expenseTotal;
        getOutputId('balance').innerText = totalBalance;
    }

}

function saveCalculate() {
    const totalBalance = parseFloat(getOutputId('balance').innerText);
    const income = parseFloat(getInputId('income').value);
    const savePercent = parseFloat(getInputId('save').value);
    const saveAmount = income * savePercent / 100;
    const remainingBalance = totalBalance - saveAmount;

    if (isNaN(savePercent)) {
        alert('Value is String');
        getInputId('save').value = '';
    }
    else  if (savePercent < 0) {
        alert('Values Cannot Be Negative');
        getInputId('save').value = '';
    }
    else if (totalBalance < saveAmount) {
        alert('You cannot save this much because you do not have');
    }
    else {
        getOutputId('save').innerText = saveAmount;
        getOutputId('remaining').innerText = remainingBalance;
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    balanceCalculate();
});
document.getElementById('save-btn').addEventListener('click', function () {
    saveCalculate();
});