export default function getStudentIdsSum(studentsArray) {
  const total = studentsArray.reduce((sum, student) => sum + student.id, 0);

  return total;
}
