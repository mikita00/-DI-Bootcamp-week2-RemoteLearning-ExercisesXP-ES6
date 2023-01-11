//Create a global variable that save the amount of money you have in your account
let account = prompt("ENTREZ VOTRE SOLDE SVP");
let tva = prompt("ENTREZ VOTRE TVA SVP")
//Create a variable that saves the amount of VAT

//Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
let amout = prompt("ENTREZ VOTE DEPENSE ET REVENU SVP")
//Create a JS code that multiplies of the expenses by the VAT
const i =(amout*tva)/100
//Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
account = account-i
//Display it
console.log("VOTRE SOLDE EST:",account);