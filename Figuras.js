//código del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//onsole.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es:" + areaCuadrado + "cm^2");
console.groupEnd();
//código del triángulo
console.group("Triángulos");


//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
  //  "Los lados del tríangulo miden:"
    //+ ladoTriangulo1
    // + "cm, " 
    // + ladoTriangulo2
     //+ "cm, " 
     //+ baseTriangulo
     //+ "cm"
    // );

    
     function perimetroTriangulo(lado1,  lado2, base){
      return lado1 +  lado2 + base;
     }
     //console.log("El perímetro del triángulo es:" + perimetroTriangulo + "cm");
    
    
     console.groupEnd();


    // código del círculo
    console.group("círculos");

    // Radio
    //const radioCirculo = 4;
   // console.log("El radio del círculo es :" + radioCirculo + "cm");

    // Diámetro
    function diametroCirculo(radio){
        return radio *2
    }

    //const diametroCirculo = radioCirculo * 2;
    //console.log("El diámetro del círculo es :" + diametroCirculo + "cm");

    // PI
    const PI = Math.PI;
    console.log(" PI es :" + PI + "cm");
   

    // Circunferencia
    function perimetroCirculo (radio){
     const diametro = diametroCirculo (radio);
     return diametro *PI;
    }


    //const perimetroCirculo = diametroCirculo * PI;
    //console.log( " El perímetro del círculo es :" + perimetroCirculo + "cm");


    // Área
    function areaCirculo (radio){
        return (radio * radio) *PI;
    }


    //const areaCirculo = (radioCirculo* radioCirculo) * PI;
    //console.log("El área del círculo es :" + areaCirculo + "cm^2");

    console.groupEnd();


    // Aquí interactuamos con el HTML
    function calcularPerimetroCuadrado() {
      const input = document.getElementById("InputCuadrado")
      const value = input.value;

      const perimetro =  perimetroCuadrado(value);
      alert(perimetro);
    }
    function calcularAreaCuadrado(){
      const input = document.getElementById("InputCuadrado")
      const value = input.value;

      const perimetro =  areaCuadrado(value);
      alert(perimetro);
    }