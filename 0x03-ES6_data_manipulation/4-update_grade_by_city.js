export default function updateStudentGradeByCity(studentsArray, city, newGradesArray) {

  const studentsPC = studentsArray.filter((student) => student.location === city);

  const updatedStudents = studentsPC.map((student) => {
    const matchingGrade = newGradesArray.find((grade) => grade.studentId === student.id);

    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return { ...student, grade };
  });

  return updatedStudents;
}
