
let isValidPassword = function (password){
    let pass ='password'
    return password.length > 8 && !password.includes(pass) 
}
console.log(isValidPassword('password'))
console.log(isValidPassword('kanishko12'))
console.log(isValidPassword('password1234'))