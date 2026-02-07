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