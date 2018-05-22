let myAccount = {
    name: 'Dave',
    expenses: 0,
    income: 0
}

let addIncome = function ( account,  amount ) {
    account.income = account.income +  amount
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account){
    return  `Account for ${account.name} has $${account.income - account.expenses}, $${account.income} in income, $${account.expenses} in expenses.`
}
addIncome(myAccount, 200)
console.log(myAccount.income)
resetAccount(myAccount)
console.log(myAccount.income)
console.log(getAccountSummary(myAccount))