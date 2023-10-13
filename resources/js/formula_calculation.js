function calculateRectangle() {

    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);

    let error = "ведіть значення"
    let perimeter = 2 * (length + width);
    let area = length * width;
    let diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById("perimeter").textContent = error.toString();
        document.getElementById("area").textContent = error.toString();
        document.getElementById("diagonal").textContent = error.toString();
    }else {
        document.getElementById("perimeter").textContent = perimeter.toString();
        document.getElementById("area").textContent = area.toString();
        document.getElementById("diagonal").textContent = diagonal.toString();
    }

}