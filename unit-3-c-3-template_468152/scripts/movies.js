// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



let amount=Number(JSON.parse(localStorage.getItem("amount")))
    
    document.getElementById("wallet").innerText=amount

  let movie_append= document.getElementById("movies")
  let id;

  function debounce(){
   
     if(id){
        clearTimeout()
     }
     
     id=  setTimeout(function(){
       movieSearch()
     },1000)
  }
 
  
  function movieSearch(){

    let searchBar= document.getElementById("search").value
  let url =`https://www.omdbapi.com/?apikey=c2130a4&s=${searchBar}`
  fetch(url)
  .then(function(res){
    return res.json()
  }).then(function(res){
    // console.log(res.Search)
    let data=res.Search
    movie_append.innerText=null
    if(data==undefined){
      return false
    }else{

      data.forEach(function(el){
      
      
      
      let box= document.createElement("div")
   let image=document.createElement("img")
   image.src=el.Poster
   let title=document.createElement("p")
   title.innerText=el.Title

   let btn =document.createElement("button")
   btn.innerText="Book Now"
   btn.setAttribute("class","book_now")
   btn.addEventListener("click",bookNow)
   
   function bookNow(){
    //  console.log(el)
       localStorage.setItem("movie",JSON.stringify(el))
       window.location.href="checkout.html"
   }
   

   box.append(image,title,btn)
   document.getElementById("movies").append(box)
    })

    }
 
    
  }) 

  }

  
