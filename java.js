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


// var smartmart={
//     Name:"smartmart",
//     Products: ["Rice", "Milk", "Sugar", "Oil"],
//     Prices: [60, 30, 45, 150],
//     Stock: [20, 15, 10, 8]
// }
// console.log(smartmart)
// smartmart.Products.push("bread")
// smartmart.Prices.push(40)
// smartmart.Stock.push(12)
// smartmart.Products.pop()
// smartmart.Prices.pop()
// smartmart.Stock.pop()
// smartmart.Products.push("Egg","biscuits")
// smartmart.Prices.push(70,25)
// smartmart.Stock.push(30,50)
// var Rices=(smartmart.Prices[0]*smartmart.Stock[0])
// var Milks=(smartmart.Prices[1]*smartmart.Stock[1])
// var Sugars=(smartmart.Prices[2]*smartmart.Stock[2])
// var Oils=(smartmart.Prices[3]*smartmart.Stock[3])
// var eggs=(smartmart.Prices[4]*smartmart.Stock[4])
// var biscuit=(smartmart.Prices[5]*smartmart.Stock[5])
// var tol=(Rices+Milks+Sugars+Oils+eggs+biscuit)
// // var a=[...smartmart]
// // console.log(a)
// smartmart.Products.pop()




// console.log(smartmart.Name)
// console.log(smartmart.Products)
// console.log(Rices)
// console.log(Milks)
// console.log(Sugars)
// console.log(Oils)
// console.log(eggs)
// console.log(biscuit)
// console.log(tol)
// console.log(tol>10000)
// console.log(smartmart.Products.length>5 && smartmart.Stock[0]>10)
// console.log(smartmart.Products.length)



// var student={
//      Name: "Ajith",
//     Age: 21,
//     Marks: [85, 72, 90]
// }
// console.log(student)
// student.Marks.push(88)
// student.Marks.pop()
// student.Marks.push(95,60)

// var tol=(student.Marks[0]+student.Marks[1]+student.Marks[2]+student.Marks[3]+student.Marks[4])
// var avg=(tol/5)
// var per=(tol/500*100)



// console.log(tol)
// console.log(avg)
// console.log(per)
// console.log(avg>=80)
// console.log(student.Marks[0]>40 && student.Marks[1]>40)
// console.log(avg>80||per>=85)

// if(avg>=90){
//     console.log("Grade : A+")
// }else if(avg>=80){
//     console.log("Grade : A")
// }else if(avg>=60){
//     console.log("Grade : B")
// }else if(avg>=40){
//     console.log("Grade : C")
// }else {
//         console.log("Grade : Failed")
// }
// console.log(student.Marks.length)


var cus={
   Name: "Ajith",
   Age: 22,
   Membership: "Gold",
   Products: ["Laptop", "Mouse", "Keyboard"],
   Prices: [50000, 800, 1500]
}

console.log(cus)
cus.Products.push("headphone")
cus.Prices.push(2000)
cus.Products.push("webcam")
cus.Prices.push(3000)
cus.Products.pop()
cus.Prices.pop()
cus.Products.push("Monitor")
cus.Prices.push(12000)

console.log(cus.Products.length)
var tolpro=(cus.Prices[0]+cus.Prices[1]+cus.Prices[2]+cus.Prices[3]+cus.Prices[4])
var avg=(tolpro/5)


console.log(tolpro)
console.log(avg)

if(tolpro>=50000 && cus.Membership == "Gold"){
    console.log("*20% discount")
}else if(tolpro>=30000){
    console.log("*10% discount")
}else if(tolpro>=10000){
    console.log("*5% discount")
}else{
    console.log("no discount")
}

var dis=(tolpro*20)/100
console.log(dis)
var frd=(dis>40000 || cus.Membership=="Gold")
console.log("Free delivery eligibility",frd)
console.log("Premium gift eligibility",cus.Membership=="Gold" && cus.Products.length>4)
console.log("Additional offer eligibility",cus.Age<25 && dis>30000)
console.log();
