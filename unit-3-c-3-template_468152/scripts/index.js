// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",moneyFun)
let total =JSON.parse(localStorage.getItem("amount")) || 0
document.getElementById("wallet").innerText=total
function moneyFun(){
 
let amount= document.getElementById("amount").value

total= Number(total)+Number(amount)
document.getElementById("wallet").innerText=total
// console.log(total)
 localStorage.setItem("amount",JSON.stringify(total))
}


 