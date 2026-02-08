 const div = document.createElement("div")
console.log(div);

div.className = "main"
div.id = Math.round( Math.random() * 10 + 1)
div.setAttribute("title","genereate title")
div.style.backgroundColor = "green"
div.style.padding = "15px"
div.style.textAlign = "center"
 const addText = document.createTextNode("chai or code")

 div.appendChild(addText)

 document.body.appendChild(div)
  
 function addLanguage(langName) {
   const li =  document.createElement("li");
   li.innerHTML = `${langName}`
   document.querySelector(".language").appendChild(li)
 }
 addLanguage("java")
 addLanguage("php")

 function addOptiLanguage(langName) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(langName))
     document.querySelector(".language").appendChild(li)
 }
 addOptiLanguage("c++")

const secondLang = document.querySelector("li:nth-child(2)")

 const newLi = document.createElement("li")
 newLi.textContent = "Mojo"
 secondLang.replaceWith(newLi)
 const firstLang = document.querySelector("li:first-child")
 firstLang.outerHTML = "<li>phy<li>"
 const lastLang = document.querySelector("li:last-child")
 lastLang.remove()