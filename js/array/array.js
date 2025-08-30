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



// //  ARRAY BY HTML TABLE 

 
 
let table = document.getElementById("fruit-table")

for(let i = 0 ; i < fruits.length; i++){
  let row = table.insertRow()
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)

cell1.innerHTML = i + 1 ;
cell2.innerHTML = fruits[i]
}

// let courses = [
//   ["HTML","CSS" ,"JS" ,"BOTSTRAP" ,"JQUERY"],
//   ["HTML1","CSS1" ,"JS1" ,"BOTSTRAP1" ,"JQUERY1"],
//   ["HTML2","CSS2" ,"JS2" ,"BOTSTRAP2" ,"JQUERY2"],
// ]
// for( data of courses){
//   for(value of data){
//     document.write(value , "<br>")
//   }  
// }



// MUlti-Dimensional Array

// let courses = [
//   ["HTML","CSS" ,"JS" ,"BOTSTRAP" ,"JQUERY"],
//   ["HTML1","CSS1" ,"JS1" ,"BOTSTRAP1" ,"JQUERY1"],
//   ["HTML2","CSS2" ,"JS2" ,"BOTSTRAP2" ,"JQUERY2"],
// ]

// document.write(courses[0][3] , "<br>")



// Methodss of Array

// let color = ["Red","Green","Yellow"]

// color.push("purple")

// document.write(color , "<br>")

// let num1 = [1,2,3,5,6,8,9,45,7,1,4,7]

// num1.sort(num1)
// document.write(num1 , "<br>") 

// for(num2 of num1){
//   document.write(number , "<br>")
// }