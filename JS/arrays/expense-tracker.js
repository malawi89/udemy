const account = {
    name: "Dave",
    income: [],
    expenses: [],
    addExpense:  function (description, amount)  {
        const expense = {
            description: description,
            amount: amount
        }
        this.expenses.push(expense)
    },
    getAccountSummary: function () { 
        const name = this.name 
        let total = 0;
        let incomeTotal = 0
         this.expenses.forEach(expense => {
             total += expense.amount
        });
        this.income.forEach(income => {
            incomeTotal += income.amount
       });

         return `${name} has a balance of £${incomeTotal - total}, £${incomeTotal} in income, £${total} in expenses`
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    }
}


account.addIncome("job", 1000)
account.addExpense("Rent", 715)
account.addExpense('Coffee', 2.90)
console.log(account.getAccountSummary());
