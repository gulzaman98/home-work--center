// let fruits = ["Mango","Apple","Banana","Orange",]

// document.write(fruits[0], "<br>")
// document.write(fruits[1] , "<br>")
// document.write(fruits[2] , "<br>")
// document.write(fruits[3] , "<br>")


// // document.write(fruits.length)
// document.write(fruits.push("pine Apple"),"<br>")
// // console.log(fruits)
// document.write(fruits.length ,"<br>")

// let fruit = ["Mango" , "Apple" , "Banana" , "Orange" , ]

// fruit.push("Pine Apple")

//  LOP FOR LOOP


let fruits = [
  "Mango","Apple","Banana","Orange","Pineapple",
  "Grapes","Strawberry","Watermelon","Papaya","Kiwi",
  "Guava","Cherry","Peach","Pear","Plum",
  "Apricot","Pomegranate","Coconut","Litchi","Fig",
  "Mulberry","Raspberry","Blueberry","Blackberry","Dragonfruit",
  "Passionfruit","Avocado","Melon","Cantaloupe","Tangerine",
  "Cranberry","Olive","Date","Jackfruit","Starfruit",
  "Custard Apple","Longan","Gooseberry","Persimmon","Durian",
  "Rambutan","Quince","Sapodilla","Breadfruit","Pomelo",
  "Jujube","Loquat","Mandarin","Nectarine","Mangosteen"
]

// for (let i = 0 ; i < fruits.length ; i++){
//     document.write((i+1)," :  " , fruits[i] , "<br>")
// }

let i = 0;
while(i < fruits.length){
    document.write((i + 1), " ", fruits[i] , "<br>")

    i++
}