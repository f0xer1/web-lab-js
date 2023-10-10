function calculateRectangle() {

    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);


    let perimeter = 2 * (length + width);
    let area = length * width;
    let diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

    if ( length <= 0 || width <= 0) {
        alert("Будь ласка, введіть додатні числа для довжини та ширини.");
        return;
    }
    document.getElementById("perimeter").textContent = perimeter.toString();
    document.getElementById("area").textContent = area.toString();
    document.getElementById("diagonal").textContent = diagonal.toString();
}