function fromDollarToYen(ValorEnDolar) {
    let yenes = (ValorEnDolar * 149.52).toFixed(3)
    return yenes;
  }
  
  function fromEuroToDollar(valorEnEuro) {
    let dolar = (valorEnEuro * 1.09).toFixed(3)
    return dolar;
  }
  function fromYanToPound(ValorEnYen) {
    let pound = (ValorEnYen * 0.0051).toFixed(3)
    return pound;
  }

  module.exports={fromDollarToYen,fromEuroToDollar,fromYanToPound}
