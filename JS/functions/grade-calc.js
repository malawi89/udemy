const gradeCalc = function(studentScore, totalPossible){
    const percent = (studentScore / totalPossible) * 100
   let grade = null
    if (percent >= 90){
         grade = 'A'
    }else if (percent >= 80 && percent < 90){
         grade = 'B'
    }else if (percent >= 70 && percent < 80){
         grade = 'C'
    }else if (percent >= 60 && percent < 70){
         grade = 'D'
    }else{
         grade = 'F'
    }
    return  `You got a ${grade} (${percent}%)!`    
}

console.log(gradeCalc(65, 90))
console.log(gradeCalc(75, 90))
console.log(gradeCalc(85, 90))