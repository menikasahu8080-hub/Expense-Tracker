

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

    let list = document.getElementById("expenseList");

    let item = document.createElement("li");

let index = expenses.length;

item.innerHTML =
    name +
    " | " +
    category +
    " | ₹" +
    amount +
    " | " +
    date +
    ' <button onclick="deleteExpense(this,' + amount + ',' + index + ')">Delete</button>';

    list.appendChild(item);

   expenses.push({
    name: name,
    category: category,
    amount: Number(amount),
    date: date
});
    localStorage.setItem("expenses", JSON.stringify(expenses));


    totalExpense = totalExpense + Number(amount);

    balance = balance - Number(amount);


    document.getElementById("expense").innerHTML = totalExpense;
    document.getElementById("balance").innerHTML = balance;


    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

}


// Delete Expense

function deleteExpense(button, amount, index) {

    button.parentElement.remove();

    totalExpense = totalExpense - amount;
    balance = balance + amount;

    document.getElementById("expense").innerHTML = totalExpense;
    document.getElementById("balance").innerHTML = balance;
    expenses = expenses.filter(function(expense) {
    return !(expense.amount === amount);
});

    

    localStorage.setItem("expenses", JSON.stringify(expenses));
}


// Load saved expense after refresh

window.onload = function() {

    let savedExpenses = localStorage.getItem("expenses");

    if(savedExpenses) {

        expenses = JSON.parse(savedExpenses);

        expenses.forEach(function(expense, index){

            let list = document.getElementById("expenseList");

            let item = document.createElement("li");

        item.innerHTML =
    expense.name +
    " | " +
    expense.category +
    " | ₹" +
    expense.amount +
    " | " +
    expense.date +
    ' <button onclick="deleteExpense(this,' + expense.amount + ',' + index + ')">Delete</button>';
            list.appendChild(item);


            totalExpense = totalExpense + expense.amount;

        });


        document.getElementById("expense").innerHTML = totalExpense;

        balance = balance - totalExpense;

        document.getElementById("balance").innerHTML = balance;

    }

}
function searchExpense() {

    let searchValue = document.getElementById("search").value.toLowerCase();

    let items = document.querySelectorAll("#expenseList li");

    items.forEach(function(item){

        let text = item.innerText.toLowerCase();

        if(text.includes(searchValue)) {
            item.style.display = "list-item";
        }
        else {
            item.style.display = "none";
        }

    });

}