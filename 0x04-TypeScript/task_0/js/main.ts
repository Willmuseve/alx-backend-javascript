interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: "Wilson",
  lastName: "Museve",
  age: 25,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Michael",
  lastNamename: "Murumba",
  age: 25,
  location: "Naivasha",
};


const studentsList: Student[] = [student1, student2];
