test("One Dollar should be 149.52 yenes", ()=> {
    const { fromDollarToYen } = require('./app.js');
    const expected = (5 * 149.52).toFixed(3); 
    expect(fromDollarToYen(5)).toBe(expected); 
});

test("One euro should be 1.09 dollars", ()=> {
    const { fromEuroToDollar } = require('./app.js');
    const expected = (3.5 * 1.09).toFixed(3); 
    expect(fromEuroToDollar(3.5)).toBe(expected); 
});

test("One Yen should be 0.0051 british pound ",()=>{
    const {fromYanToPound} = require('./app.js');
    const expected = (4.5 * 0.0051).toFixed(3)
    expect(fromYanToPound(4.5)).toBe(expected)
})
    


