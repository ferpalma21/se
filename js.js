
//Capture the students
var studentList = [];

//model student

var code, name, calif;

//Add students to list
function registerStudent(){
  //Capture info
  var student = {};
  student.code = document.formStudent.code.value;
  student.name = document.formStudent.name.value;
  student.calif = document.formStudent.calif.value;
  //check if all info is in
  if(student.code == "" || student.name == "" || student.calif == ""){
  checkEmpty(student);
}else{
  //adding student
  studentList.push(student);
  //showing students
  showStudents(studentList);
  return studentList;
}
}
//blanked the inputs
// function blank(student){
//   if (student.code !== "") {
//     document.getElementById('code').style.background = "white";
//   }
//   if (student.name !== "") {
//     document.getElementById('name').style.background = "white";
//   }
//   if (student.calif) {
//     document.getElementById('calif').style.background = "white";
//   }
// }

//checking empty info
function checkEmpty(student){
  if(student.code == ""){
    document.getElementById('code').style.background = "red";
    return console.log("error");
  }
  if (student.name === '') {
    document.getElementById('name').style.background = "red";
    return console.log("error");
  }
  if (student.calif === '') {
    document.getElementById('calif').style.background = "red";
    return console.log("error");
  }
}

//print students
function showStudents(studentList){
  var counter = 1;
  var html = '<br>';
  html += '<table class="student-list">';
  html += '<tr>';
  html += '<th>Código</th>';
  html += '<th>Nombre</th>';
  html += '<th>Nota</th>';
  html += '</tr>';
  for (var student in studentList ){
    counter++;
    html += '<tr>';
    html += '<td class="counter">'+ studentList[student].code + '</td>';
    html += '<td class="counter">'+ studentList[student].name + '</td>';
    html += '<td class="counter">'+ studentList[student].calif + '</td>';
  }
  html += '</table>';
  document.getElementById('listing').innerHTML = html;
}


//alert for average
function average(){
  var sum = 0 ;
  var html;
  if(studentList.length === 0){
  isEmpty();
}else{
  for (var i = 0; i < studentList.length ; i++){
    var calif = studentList[i].calif;
    calif = Number(calif);
    sum += calif;
    console.log(sum);
  }
  var avg = sum/studentList.length;

  html = '<h3>El promedio del grupo es ';
  html += '<strong>'+ avg + '</strong>';

  alert(html);

}



}

//if the db has no elements
function isEmpty(){
  var html = "<h3>No hay estudiantes registrados</h3>";
  document.getElementById('average').innerHTML = html;
}

//best grade function
function highestGrade(){
  var highest, html;
  var  maxGrade;
  var array = [];
  if(studentList.length === 0){
    isEmpty();
  }else{
  for (var i = 0; i < studentList.length ; i++){
    highest = Number(studentList[i].calif);
    array.push(highest);
  }

  maxGrade = Math.max.apply(Math, array);
  // console.log(maxGrade + " "+ array);
  html = 'La calificación más alta es ';
  html += maxGrade;

  alert( html);
}
}

//alert lowest grade function
function lowestGrade(){
  var lowest, html;
  var minGrade;
  var array = [];
  if(studentList.length === 0){
    isEmpty();
  }else{
    for (var i = 0; i < studentList.length ; i++){
      lowest = Number(studentList[i].calif);
      array.push(lowest);
    }
    minGrade = Math.min.apply(Math, array);

    html = 'La calificación más baja es ';
    html += minGrade;

    alert(html) ;
  }
}

//Adding listeners
function btnFunction(){
  var register = document.getElementById("btn-register");
  console.log(register);
  register.addEventListener("click", registerStudent, true);
}
