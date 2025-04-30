let size = 200;
const colors = ["red", "green", "blue"]
let colorIndex = 0;
const maxSize = 420;
const originalSize = 200;
const minSize = 200;

function setSizeColor() {
    size += 10;

    if (size > maxSize) {
        size = originalSize;
    }

    const div = document.getElementById("balloon")
    div.style.width = size + "px";
    div.style.height = size + "px";

    colorIndex = (colorIndex + 1) % colors.length;
    div.style.backgroundColor = colors[colorIndex];

};

function decreaseSize(){
    size -= 5;

    if (size < minSize) {
        size = originalSize;
    }

    const div = document.getElementById("balloon")
    div.style.width = size + "px";
    div.style.height = size + "px";

    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    div.style.backgroundColor = colors[colorIndex];
}