
const { sum } = require('./app.js'); 
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});


const { fromEuroToDollar } = require('./app.js');
test('One euro should be 1.206 dollars', () =>{
    let euroDollar = fromEuroToDollar(3.5)
    expect(euroDollar).toBe(4.2);
});

const { fromDollarToYen } = require('./app.js');
test('', () =>{
    let dollarToYen = fromDollarToYen(2)
    expect(dollarToYen).toBe(219.88);
});
const { fromYenToPound } = require('./app.js');
test('', () =>{
    let yenToPound = fromYenToPound(5)
    expect(yenToPound).toBe(0.033);
});