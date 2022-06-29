
function alturaTriangulo(lado1, lado2, ladoBase){
    if (lado1 === lado2 && lado1 !== ladoBase){
        const altura = math.sqrt(lado1 ** 2 - (ladoBase / 2) ** 2);
        return altura;
    } else {
        alert("No estás agregando los lados de un triángulo isósceles");
    }
  }   

  function areaTriangulo(lado1, lado2, ladoBase,){
    return (ladoBase * alturaTriangulo(lado1, lado2, ladoBase)) /2;

  }