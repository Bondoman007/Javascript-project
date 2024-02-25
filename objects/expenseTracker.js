let myAccount= {
    name: 'Kanishk',
    expense: 0,
    income: 0
}

let resetAccount = function (account) {
    account.expense=0
    account.income=0
}

let addIncome = function (account,income) {
    account.income=account.income+income
}

let addEspense = function (account,amount) {
    account.expense=account.expense+amount
}

let accountSummary = function (account)
{
    return `Account for ${account.name} has $${account.income - account.expense}. $${account.income} in income. $${account.expense} in expenses`
}
let res = addIncome(myAccount,1000)
let res1 = addEspense(myAccount,100)
let temps=accountSummary(myAccount)
console.log(temps)
let tempp=resetAccount(myAccount)
console.log(myAccount)