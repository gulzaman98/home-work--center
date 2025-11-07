// let fruits = ["Mango","Apple","Banana","Orange",]

// document.write(fruits[0], "<br>")
// document.write(fruits[1] , "<br>")
// document.write(fruits[2] , "<br>")
// document.write(fruits[3] , "<br>")

// document.write(fruits.join("<br>"))
// fruits.push("PineApple")
// document.write(fruits.join("<br>"))





// function add (a,b){
//   return a + b;
// }

// document.write( "5 + 3  = " + add(5,3))


// const add = (a,b)=> a+b;

// document.write(`5 + 3 = ${add(5,3)}`)














//  LOP FOR LOOP


// let fruits = [
//   "Mango","Apple","Banana","Orange","Pineapple",
//   "Grapes","Strawberry","Watermelon","Papaya","Kiwi",
//   "Guava","Cherry","Peach","Pear","Plum",
//   "Apricot","Pomegranate","Coconut","Litchi","Fig",
//   "Mulberry","Raspberry","Blueberry","Blackberry","Dragonfruit",
//   "Passionfruit","Avocado","Melon","Cantaloupe","Tangerine",
//   "Cranberry","Olive","Date","Jackfruit","Starfruit",
//   "Custard Apple","Longan","Gooseberry","Persimmon","Durian",
//   "Rambutan","Quince","Sapodilla","Breadfruit","Pomelo",
//   "Jujube","Loquat","Mandarin","Nectarine","Mangosteen"
// ]

// // for (let i = 0 ; i < fruits.length ; i++){
// //     document.write((i+1)," :  " , fruits[i] , "<br>")
// // }


















// //  ARRAY BY HTML TABLE 

 
 
// let table = document.getElementById("fruit-table")

// for(let i = 0 ; i < fruits.length; i++){
//   let row = table.insertRow()
//   let cell1 = row.insertCell(0)
//   let cell2 = row.insertCell(1)

// cell1.innerHTML = i + 1 ;
// cell2.innerHTML = fruits[i]
// }











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

let courses = [
  ["HTML","CSS" ,"JS" ,"BOTSTRAP" ,"JQUERY"],
  ["HTML1","CSS1" ,"JS1" ,"BOTSTRAP1" ,"JQUERY1"],
  ["HTML2","CSS2" ,"JS2" ,"BOTSTRAP2" ,"JQUERY2"],
]

// document.write(courses[0][3] , "<br>" , courses[1][2],"<br>")
// for(let i = 0 ; i < courses.length ; i++){
//     for(let j = 0 ; j < courses[i].length ; j++){
//         document.write(courses[i][j] )
//     }
//     document.write("<br>")
// }




















// Methodss of Array

// let colors = ["Red", "Green", "Yellow"];
// let colors2 = ["aqua", "indigo", "Khaki"]
// let merge = colors.concat(colors2)

// colors.push("Blue");
// document.write("1 :  colors.push(Blue) =>  ", colors, "<br>", "Length of Colors Array :", colors.length, "<br>");

// colors.pop()
// document.write(" 2 : colors.pop() =>  ", colors, "<br>", "Length of Colors Array :", colors.length, "<br>");

// colors.shift()
// document.write(" 3 : colors.shift() =>  ", colors, "<br>", "Length of Colors Array :", colors.length, "<br>");

// colors.unshift("Navy")
// document.write(" 4 : colors.unshift(Navy) =>  ", colors, "<br>", "Length of Colors Array :", colors.length, "<br>");

// colors.join(" ")
// document.write(" 5 : colors.join() =>  ", colors.join(" "), "<br>", "Length of Colors Array :", colors.length, "<br>");

// colors.concat(merge)
// document.write(" 6 : colors.concat(colors2) =>  ", merge, "<br>", "Length of Colors Array :", merge.length, "<br>");

// colors.sort()
// document.write(" 7 : colors.sort() =>  ", colors, "<br>", "Length of Colors Array :", colors.length, "<br>");

























// let students =  [

//   ["Ali", " ", 15, " ", "9th", " ", "A"],
//   ["Ahmed", " ", 16, " ", "10th", " ", "B"],
//   ["Sara", " ", 14, " ", "8th", " ", "A"],
//   ["Fatima", " ", 15, " ", "9th", " ", "A+"],
//   ["Hassan", " ", 17, " ", "11th", " ", "C"],
//   ["Bilal", " ", 16, " ", "10th", " ", "B+"],
//   ["Ayesha", " ", 15, " ", "9th", " ", "A"],
//   ["Usman", " ", 14, " ", "8th", " ", "A+"],
//   ["Kiran", " ", 16, " ", "10th", " ", "B"],
//   ["Zara", " ", 17, " ", "11th", " ", "A"],
//   ["Hamza", " ", 15, " ", "9th", " ", "A+"],
//   ["Nida", " ", 16, " ", "10th", " ", "B"],
//   ["Farhan", " ", 14, " ", "8th", " ", "C"],
//   ["Laiba", " ", 15, " ", "9th", " ", "A"],
//   ["Adnan", " ", 17, " ", "11th", " ", "B+"],
//   ["Sana", " ", 16, " ", "10th", " ", "A+"],
//   ["Moiz", " ", 15, " ", "9th", " ", "B"],
//   ["Iqra", " ", 14, " ", "8th", " ", "A"],
//   ["Shahid", " ", 16, " ", "10th", " ", "C"],
//   ["Maryam", " ", 17, " ", "11th", " ", "A+"]

// ]



// document.write("<table border='1' cellspacing='0' cellpadding='5>'");

// document.write("<tr>")
// document.write("<th>Name</th>")
// document.write("<th>Age</th>")
// document.write("<th>Class</th>")
// document.write("<th>Grade</th>")
// document.write("</tr>")

// for (let i = 0; i < students.length; i++) {
//   let grade =  students[i][6];
//   let bgColor = "";

//   if(grade === "A+"){
//     bgColor = "LightGreen"
//   }
//   else if(grade === "A"){
//     bgColor = "Khaki"
//   }
//   else if(grade === "B"){
//     bgColor = "aqua"
//   }
//   else if(grade === "C"){
//     bgColor = "lightcoral"
//   }
//   document.write("<tr style='background-color:" + bgColor + "'>")
//   for (let j = 0; j < students[i].length; j++) {
//     if(students[i][j] !== " ")
//     document.write("<td>" + students[i][j] + "</td>")
//   }
//   document.write("</tr>")
// }

// document.write("</table>")












