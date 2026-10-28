var costomer={
    name:"ajith",
    age:19,
    cart:["Laptop", "Mouse", "Keyboard"],
    price:[50000, 800, 1500]
}
costomer.cart.push("headphone")
costomer.price.push(2000)
costomer.cart.pop()
costomer.price.pop()
costomer.cart.push("Moniter","Webcam")
costomer.price.push(12000,3000)
var tol=(costomer.price[0]+costomer.price[1]+costomer.price[2]+costomer.price[3]+costomer.price[4])
console.log(costomer.name)
console.log(costomer.age)
console.log(costomer.cart)
console.log(tol)
console.log(tol>50000)
console.log(costomer.cart>5)
console.log(costomer.cart.length)


console.log(costomer);
  