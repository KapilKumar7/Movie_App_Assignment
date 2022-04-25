// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let amount=Number(JSON.parse(localStorage.getItem("amount")))
    
document.getElementById("wallet").innerText=amount




//  wallet part done----------

 function sucessFun(){
  var seats=document.querySelector("#number_of_seats").value
    if(amount<100*seats){
      alert("Insufficient Balance!")
    }else if(amount>=100*seats){
      alert("Booking successful!")
      let finalBalance=amount-(100*seats)
      localStorage.setItem("amount",JSON.stringify(finalBalance))
      window.location.reload()
      
    }
   
 }


// 

let movie=JSON.parse(localStorage.getItem("movie"))
  let h3= document.querySelector("h3")
 h3.innerText=movie.Title
 let image=document.querySelector("img")
 image.src=movie.Poster
