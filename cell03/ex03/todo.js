const ft_list = document.getElementById("ft_list");

function addTodo() {
    const text = prompt("What you want to do:");
    if (text && text.trim() !== "") {

        const newDiv = document.createElement("div")
        newDiv.innerText = text
        newDiv.addEventListener("click", removeTodo);
        ft_list.prepend(newDiv);
        saveToCookie();
        console.log
    }
}

function removeTodo(event) {
    const confirmDelete = confirm("Do you want to delete?")
    if (confirmDelete) {
        event.target.remove();
        saveToCookie();  
    }
}

function saveToCookie() {
    const todos = [];
    for (let child of ft_list.children) {
        if (child.tagName.toLowerCase() === "div") {
            todos.push(child.innerText);
        }
    }
    const todoString = JSON.stringify(todos);
    document.cookie = ("todos=" + encodeURIComponent(todoString) + ";path=/");
    console.log(document.cookie)
}

function loadFromCookie() {
    const cookies = document.cookie;
    const match = cookies.match(/(?:^|;\s*)todos=([^;]*)/);
    if (match) {
        const todoString = decodeURIComponent(match[1]);
        const todos = JSON.parse(todoString);
        for (let text of todos) {
            const newDiv = document.createElement("div");
            newDiv.innerText = text;
            newDiv.addEventListener("click", removeTodo);
            ft_list.prepend(newDiv);
        }
    }
}

window.onload = function () {
    loadFromCookie();
};