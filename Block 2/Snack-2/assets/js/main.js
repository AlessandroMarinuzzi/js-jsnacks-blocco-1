// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
var triangle = {
    base : 5,
    height : 10,
}

// Calcolare perimetro e area.
var base = triangle.base;
var height = triangle.height;
var hypotenuse = Math.sqrt(base * base + height * height); 
var perimeter = base + height + hypotenuse;
var area = (base*height)/2;
