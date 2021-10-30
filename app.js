const sum = (a,b) => {
    return a+b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = (cifraEuro) =>{
   return cifraEuro*oneEuroIs.USD; 
   
}
const fromDollarToYen = (cifraDollar)=>{
    let resultado = cifraDollar*109.94;
    resultado = resultado.toFixed(2);
    return parseFloat(resultado);
}
const fromYenToPound= (cifraYen) =>{
    return cifraYen * 0.0066;
}
console.log(fromYenToPound(3))
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(3.5))
module.exports = { fromYenToPound,fromDollarToYen, fromEuroToDollar, sum };
