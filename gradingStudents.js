function gradingStudents(grades) {
    let roundedGrade = []
    
    for(let i = 0; i < grades.length; i++){
        let grade = grades[i]
        if(grade < 38){
            roundedGrade.push(grade)
        } else if(grade % 5 === 0){
            roundedGrade.push(grade)
        } else if((grade + 1) % 5 === 0){
            roundedGrade.push(grade + 1)
        } else if((grade + 2) % 5 === 0){
            roundedGrade.push(grade + 2)
        } else{
            roundedGrade.push(grade)
        }
    }
    
    return roundedGrade
}
