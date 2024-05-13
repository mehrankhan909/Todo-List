function addElements(){
    const input = document.querySelector("input");
    if(input.value == ""){
        alert("Please enter something");
        return;
    }
    else{
        let newDate = new Date();
        let formattedDate = newDate.toLocaleTimeString();
        let newElement = document.createElement("li");
        let createSpan = document.createElement("span");
        let createDiv = document.createElement("div");
        createDiv.classList.add("div");
        createSpan.innerHTML = `${input.value} - (${formattedDate})`;
        createDiv.appendChild(createSpan);
        newElement.appendChild(createDiv);
        let button = document.createElement("button");
        button.innerHTML = `&#x2715`;
        button.classList.add("close");
        newElement.appendChild(button);
        document.getElementById("list").appendChild(newElement);
        button.addEventListener("click", () => {
        button.parentElement.remove();
       });
       
    
    newElement.addEventListener("click", ()=>{
        newElement.classList.toggle("done");
    })
        input.value = "";
    }
}



