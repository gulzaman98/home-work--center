let students = [
    {
        id: 100,
        name: "Gulzaman",
        age: 27,
        email: "gulzaman@gmail.com",
        course: "HDSE",
        batch: "TTS",
        faculty: "Miss Saira",
        sro: "Sir Abdur Rehman",
        onGoingSemester: "CPISM",
    },

    {
        id: 101,
        name: "saad",
        age: 25,
        email: "saad@gmail.com",
        course: "HDSE",
        batch: "TTS",
        faculty: "Miss Saira",
        sro: "Sir Abdur Rehman",
        onGoingSemester: "CPISM",
    },

    {
        id: 102,
        name: "husnain",
        age: 23,
        email: "husnain@gmail.com",
        course: "HDSE",
        batch: "TTS",
        faculty: "Miss Saira",
        sro: "Sir Abdur Rehman",
        onGoingSemester: "CPISM",
    },
    {
        id: 103,
        name: "Sabbor",
        age: 23,
        email: "sabbor@gmail.com",
        course: "HDSE",
        batch: "TTS",
        faculty: "Miss Saira",
        sro: "Sir Abdur Rehman",
        onGoingSemester: "CPISM",
    },
    {
        id: 104,
        name: "Hamza",
        age: 45,
        email: "hamza@gmail.com",
        course: "HDSE",
        batch: "TTS",
        faculty: "Miss Saira",
        sro: "Sir Abdur Rehman",
        onGoingSemester: "CPISM",
    },
    {
        id: 105,
        name: "Mustafa",
        age: 23,
        email: "mustafa@gmail.com",
        course: "HDSE",
        batch: "TTS",
        faculty: "Miss Saira",
        sro: "Sir Abdur Rehman",
        onGoingSemester: "CPISM",
    },
]



let searchId = prompt("Enter your Id ")

searchId = Number(searchId)

let student = students.find(student => student.id === searchId)

let output = document.getElementById("output")

if(student){
    output.innerHTML = `
    ${"Id" + " : " + student.id + " : " + "<br>"}
    ${"Name" + " : " + student.name + "<br>"}
    ${"Age" + " : " + student.age + "<br>"}
    ${"Email" + " : " + student.email + "<br>"}
    ${"Course" + " : " + student.course + "<br>"}
    ${"Batch" + " : " + student.batch + "<br>"}
    ${"Faculty" + " : " + student.faculty + "<br>"}
    ${"SRO" + " : " + student.sro + "<br>"}
    ${"On Going Semester" + " : " + student.onGoingSemester + "<br>"} 
    `
}else{
    output.innerHTML = "No Student found with this Id!"
} 