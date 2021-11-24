const grades = document.getElementById("grades");
grades.addEventListener("click", gradeSubjects);
function gradeSubjects(){
  let numCourses = parseInt(prompt("How many subjects do you take?"));
  let num = 0, results = [numCourses], output = document.getElementById("output");

  output.innerHTML = "";
  for(i = 0; i < numCourses; i++){
    results[i] = parseInt(prompt("Please enter a result for course " + (i + 1) + "."));
  }
  for(i = 0; i < numCourses; i++){
    output.innerHTML += "Result " + (i + 1) + " : " + results[i] + "<br>";
    console.log("Result " + (i + 1) + " is: " + results[i]);
    num = num + results[i];
    if(results[i] >=85 && results[i] <= 100){
      output.innerHTML += "Grade : A" + "<br>";
    } else if(results[i] >=70 && results[i] < 85  ){
      output.innerHTML += "Grade : B" + "<br>";
    } else if(results[i] >=55 && results[i] < 70){
      output.innerHTML += "Grade : C" + "<br>";
    } else if(results[i] >=40 && results[i] <= 55){
    output.innerHTML += "Grade : D" + "<br>";
    } else if(results[i] >= 0 && results[i] < 40){
      output.innerHTML += "Grade : F" + "<br>";
    } else{
      output.innerHTML += "Inncorrect value entered, please select from 0-100!" + "<br>";
    }
  }
}
