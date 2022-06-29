//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio *  porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
function onclickButtonPriceDiscount(){
    const inputPrise = document.getElementById("InputPrice");
    const priceValue = inputPrice.Value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.Value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
};

   

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal *  porcentajePrecioConDescuento) / 100;

// hay varias formas
//console.log("El precio original es" + precioOriginal);}

//console.log({
    //precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento,
//});