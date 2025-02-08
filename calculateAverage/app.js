const student = {
  name: "Marko",
  grades: [10, 9, 6, 7, 10],
};

const calculateAverage = () => {
  let sum = student.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / student.grades.length;
};

console.log(calculateAverage());
