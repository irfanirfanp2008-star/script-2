// var costomer={
//     name:"ajith",
//     age:19,
//     cart:["Laptop", "Mouse", "Keyboard"],
//     price:[50000, 800, 1500]
// }
// costomer.cart.push("headphone")
// costomer.price.push(2000)
// costomer.cart.pop()
// costomer.price.pop()
// costomer.cart.push("Moniter","Webcam")
// costomer.price.push(12000,3000)
// var tol=(costomer.price[0]+costomer.price[1]+costomer.price[2]+costomer.price[3]+costomer.price[4])
// console.log(costomer.name)
// console.log(costomer.age)
// console.log(costomer.cart)
// console.log(tol)
// console.log(tol>50000)
// console.log(costomer.cart>5)
// console.log(costomer.cart.length)


// console.log(costomer);


var smartmart={
    Name:"smartmart",
    Products: ["Rice", "Milk", "Sugar", "Oil"],
    Prices: [60, 30, 45, 150],
    Stock: [20, 15, 10, 8]
}
console.log(smartmart)
smartmart.Products.push("bread")
smartmart.Prices.push(40)
smartmart.Stock.push(12)
smartmart.Products.pop()
smartmart.Prices.pop()
smartmart.Stock.pop()
smartmart.Products.push("Egg","biscuits")
smartmart.Prices.push(70,25)
smartmart.Stock.push(30,50)
var Rices=(smartmart.Prices[0]*smartmart.Stock[0])
var Milks=(smartmart.Prices[1]*smartmart.Stock[1])
var Sugars=(smartmart.Prices[2]*smartmart.Stock[2])
var Oils=(smartmart.Prices[3]*smartmart.Stock[3])
var eggs=(smartmart.Prices[4]*smartmart.Stock[4])
var biscuit=(smartmart.Prices[5]*smartmart.Stock[5])
var tol=(Rices+Milks+Sugars+Oils+eggs+biscuit)
// var a=[...smartmart]
// console.log(a)
smartmart.Products.pop()




console.log(smartmart.Name)
console.log(smartmart.Products)
console.log(Rices)
console.log(Milks)
console.log(Sugars)
console.log(Oils)
console.log(eggs)
console.log(biscuit)
console.log(tol)
console.log(tol>10000)
console.log(smartmart.Products.length>5 && smartmart.Stock[0]>10)
console.log(smartmart.Products.length)
