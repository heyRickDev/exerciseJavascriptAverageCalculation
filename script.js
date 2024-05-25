let students = [
  {
    name: "Patrick",
    gender: "male",
    firstGrade: 8,
    secondGrade: 5,
    thirdGrade: 6,
    forthGrade: 10,
  },
  {
    name: "Anne",
    gender: "female",
    firstGrade: 5,
    secondGrade: 7,
    thirdGrade: 7,
    forthGrade: 6,
  },
  {
    name: "John",
    gender: "male",
    firstGrade: 7,
    secondGrade: 8,
    thirdGrade: 9,
    forthGrade: 6,
  },
  {
    name: "Maria",
    gender: "female",
    firstGrade: 9,
    secondGrade: 6,
    thirdGrade: 8,
    forthGrade: 7,
  },
  {
    name: "Luke",
    gender: "male",
    firstGrade: 6,
    secondGrade: 5,
    thirdGrade: 6,
    forthGrade: 7,
  },
  {
    name: "Sophia",
    gender: "female",
    firstGrade: 8,
    secondGrade: 9,
    thirdGrade: 10,
    forthGrade: 8,
  },
  {
    name: "James",
    gender: "male",
    firstGrade: 7,
    secondGrade: 8,
    thirdGrade: 7,
    forthGrade: 6,
  },
  {
    name: "Isabella",
    gender: "female",
    firstGrade: 6,
    secondGrade: 7,
    thirdGrade: 5,
    forthGrade: 9,
  },
  {
    name: "Michael",
    gender: "male",
    firstGrade: 5,
    secondGrade: 6,
    thirdGrade: 7,
    forthGrade: 5,
  },
  {
    name: "Emma",
    gender: "female",
    firstGrade: 8,
    secondGrade: 9,
    thirdGrade: 8,
    forthGrade: 10,
  },
]
const calc = function (GradeOne, GradeTwo, GradeThree, GradeFour) {
  let averageCalc = (
    (GradeOne + GradeTwo + GradeThree + GradeFour) /
    4
  ).toFixed(2)
  return averageCalc
}
const calcMessage = function (student) {
  let avgCalc = calc(
    student.firstGrade,
    student.secondGrade,
    student.thirdGrade,
    student.forthGrade
  )
  let gnd = student.gender == "male" ? `o` : `a`
  let CheckAvg =
    avgCalc >= 7
      ? `Parabéns, ${student.name}! Você foi aprovad${gnd} no concurso!`
      : `Não foi dessa vez, ${student.name}! Continue se esforçando e tente novamente!`
  return `
  A média final d${gnd} alun${gnd} ${student.name} é: ${avgCalc} \n ${CheckAvg}
  `
}
for (let student of students) {
  let studentMessage = calcMessage(student)
  alert(studentMessage)
}
