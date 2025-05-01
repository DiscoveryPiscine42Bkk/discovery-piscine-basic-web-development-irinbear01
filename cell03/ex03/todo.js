const ft_list = document.getElementById("ft_list");

function addTodo() {
    const text = prompt("What you want to do:");
    if (text !== " ") {
        const newDiv = document.createElement("div")
        newDiv.innerText = text
        newDiv.addEventListener("click", removeTodo);
        newDiv.prepend(ft_list);
        
    }
}

function removeTodo() {
    const confirmDelete = confirm("Do you want to delete?")
    if (confirmDelete) {
        
    }
}

function saveToCookie() {

}

function loadFromCookie() {

}