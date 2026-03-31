
//Final Challenge: Student Grade Calculator
const student = {
  name: "Amani",
  scores: [80, 90, 75, 100]
};


function calculateAverage(scores) {
  let total = 0;

  
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total / scores.length;
}


function getGrade(avg) {
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}


const average = calculateAverage(student.scores);
const grade = getGrade(average);


console.log("Name:", student.name);
console.log("Average:", Math.round(average));
console.log("Grade:", grade);


// I believe strings were the easiest.
// I believe objects might have been the most difficult
//