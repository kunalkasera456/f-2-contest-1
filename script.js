/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(student) {
    if(student.profession === "developer") {
      console.log(student);
    }
  })

}
// PrintDeveloperbyMap(arr);

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(student) {
    if(student.profession === "developer") {
      console.log(student);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(newEmployee);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  let removedAdmin = arr.filter((student) => student.profession !== "admin")
  console.log(removedAdmin);
}

function concatenateArray() {
  //Write your code here, just console.log
  let new_Arr = [
    { id: 5, name: "kunal", age: "25", profession: "developer" },
  { id: 6, name: "anjali", age: "20", profession: "developer" },
  { id: 7, name: "anish", age: "22", profession: "developer" },
  ]

  let concatenatedArray = arr.concat(new_Arr);
  console.log(concatenatedArray);
}
