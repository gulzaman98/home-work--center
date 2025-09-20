
// Q 1

let student1 = {
    Id: 44102,
    Name: 'Gulzaman',
    Email:"gulzamanarain77@gmail.com",
    Age: 20,
}
student1.Age = 30
// document.write(student,"</br>")
// console.log(student1);


// Q 2 



let car = {
    brand:"Toyota",
    model:"Corola",
    year:2020,
    volor:"white",
}
// document.write(car.brand , "</br>")


// Q 3 

let book = {
    Title:"Javascript basic",
    Author:"Brendan Eich."
}

book.Price = 500
// document.write(book.price , "</br>")

for (let key in book){
    // document.write(key , ":" , book[key] , "</br>")
}

let student = {
    Id: 101,
    Name: "Gulzaman",
    Age: 20,
    Email: "gulzaman@example.com",
    Phone: "03001234567",
    Address: "Karachi, Pakistan",
    Course: "Frontend Development",
    Batch: "Morning",
    RollNo: "FD-44102",
    FatherName: "Muhammad Saleem",
    BloodGroup: "o-",
    Gender: "Male",
    MaritalStatus: "Single",
    CNIC: "42101-1234567-9",
    City: "Karachi",
    Country: "Pakistan",
}
// for (let key in student){
//     document.write(key , " : " , student[key] , "<br>")
// }


let cnic = {
    Name: "Gulzaman",
    FatherName: "Muhammad Saleem",
    CNIC:4410266592979,
    Dateofbirth: "17-05-1999",
    Gender: "Male",
    Address:"Karachi Pakistan",
    IssueDAte: "17-09-2107",
    ExpireDAte: "17-09-2027",
}

// document.write(cnic.Name, "<br>")
// document.write(cnic.FatherName, "<br>")
// document.write(cnic.CNIC, "<br>")







let cnic1 = {
    Name: "Gulzaman",
    FatherName: "Muhammad Saleem",
    CNIC:4410266592979,
    Dateofbirth: "17-05-1999",
    Gender: "Male",
    Address:"Karachi Pakistan",
    IssueDAte: "17-09-2017",
    ExpireDAte: "17-09-2027",
}


// For In loop


// for(key in cnic){
//     document.write(key , " : " , cnic[key] , "<br>")
// }


// document.write(cnic1.Name)


let tablebody = document.getElementById("cnicTable")

for( let key in cnic1){
    let row = "<tr><td>" + key + "</td><td>" + cnic1[key] + "</td></tr>";
    tablebody.innerHTML += row;
}

// let tablebody = document.getElementById("cnicTable");

// for (let key in cnic1) {
//     let row = "<tr><td>" + key + "</td><td>" + cnic1[key] + "</td></tr>";
//     tablebody.innerHTML += row;
// }