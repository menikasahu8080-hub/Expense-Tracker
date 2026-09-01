let totalExpense = 0;
let balance = 0;
let expenses = [];

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("expenseDate").value;

    if (name === "" || amount === "" || category === "" || date === "") {
        alert("Please enter expense name, category, amount and date");
        return;
    }

    expenses.push({
        name: name,
        category: category,
        amount: Number(amount),
        date: date
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("expenseDate").value = "";
}


function displayExpenses() {

    let list = document.getElementById("expenseList");

    list.innerHTML = "";

    totalExpense = 0;

    expenses.forEach(function(expense, index) {

        totalExpense += expense.amount;

        let item = document.createElement("li");

        item.innerHTML =
            expense.name +
            " | " +
            expense.category +
            " | ₹" +
            expense.amount +
            " | " +
            expense.date +
            ' <button onclick="deleteExpense(' + index + ')">Delete</button>';

        list.appendChild(item);
    });

    balance = -totalExpense;

    document.getElementById("expense").innerHTML = totalExpense;
    document.getElementById("balance").innerHTML = balance;
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}


function searchExpense() {

    let searchValue = document.getElementById("search").value.toLowerCase().trim();

    let items = document.querySelectorAll("#expenseList li");

    items.forEach(function(item) {

        let text = item.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });
}


window.onload = function() {

    let savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
    }

    displayExpenses();
};let totalExpense = 0;
let balance = 0;
let expenses = [];

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("expenseDate").value;

    if (name === "" || amount === "" || category === "" || date === "") {
        alert("Please enter expense name, category, amount and date");
        return;
    }

    expenses.push({
        name: name,
        category: category,
        amount: Number(amount),
        date: date
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("expenseDate").value = "";
}


function displayExpenses() {

    let list = document.getElementById("expenseList");

    list.innerHTML = "";

    totalExpense = 0;

    expenses.forEach(function(expense, index) {

        totalExpense += expense.amount;

        let item = document.createElement("li");

        item.innerHTML =
            expense.name +
            " | " +
            expense.category +
            " | ₹" +
            expense.amount +
            " | " +
            expense.date +
            ' <button onclick="deleteExpense(' + index + ')">Delete</button>';

        list.appendChild(item);
    });

    balance = -totalExpense;

    document.getElementById("expense").innerHTML = totalExpense;
    document.getElementById("balance").innerHTML = balance;
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}


function searchExpense() {

    let searchValue = document.getElementById("search").value.toLowerCase().trim();

    let items = document.querySelectorAll("#expenseList li");

    items.forEach(function(item) {

        let text = item.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });
}


window.onload = function() {

    let savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
    }

    displayExpenses();
};
