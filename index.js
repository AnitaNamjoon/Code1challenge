/Prompt the user to input the student marks.
function calculateStudentFinalGrade(studmarks){
//check if the input is between 0 and 100. 
    if (studmarks >=0 && studmarks <=100)

//Calculate the student's grade.
var studmarks;
 if (studmarks > 79) {
    return "A"
 }else if (studmarks >= 60 && studmarks <= 79){
     return "B"
 }else if (studmarks >= 49 && studmarks <=59){
    return "C"
 }else if (studmarks >=40 && studmarks <= 40){
      return  "D"
 }else if (studmarks < 40){
    return "E"
 }
}
const studmarks =parseInt(65)//input your marks here
const grid = calculateStudentFinalGrade(studmarks)
console.log(grid)
