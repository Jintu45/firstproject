// dom selection
// event listener
//basic validation
//create elements 
//append
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
// const btn = document.querySelector("#btn");
const bookList = document.querySelector("#bookList");



document.getElementById("button").addEventListener("click", function(e) {
    e.preventDefault()
      
    if(title.value == '' && author.value == '' && year.value == '') {
        alert("Please write word")
    }
    else{
        const newRaw = document.createElement("tr");
        // create new title
        const newTitle = document.createElement("th");
        newTitle.innerHTML= title.value;
        newRaw.appendChild(newTitle);
        //author 
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML= author.value;
        newRaw.appendChild(newAuthor);
        //year
        const newYear = document.createElement("th");
        newYear.innerHTML= year.value;
        newRaw.appendChild(newYear);

        bookList.appendChild(newRaw);
    }
  })





