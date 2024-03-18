export const cpp: Subjects.Cpp = new Subjcts.Cpp();
export const java: Subjects.Java = new Subjcts.Java();
export const react: Subjects.React = new Subjcts.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Julien',
  lastName: 'Barber',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
