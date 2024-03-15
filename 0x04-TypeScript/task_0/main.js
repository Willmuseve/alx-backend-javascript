export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Simamnkele",
  lastName: "Njoli",
  age: 23,
  location: "Centurion, South Africa",
};

const studentB: Student = {
  firstName: "Bugs",
  lastName: "Bunny",
  age: 83,
  location: "Brooklyn, New York, USA",
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];

const styleSheet = `
  html {
    margin: 0;
	height: 100%;
  }
  body {
    margin: 10%;
	height: 80%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
	border: 1px solid grey;
	cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');

	bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
	bodyRow.insertAdjacentHTML('beforeend', `<td.${student.location}</td>`);
	tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement('style');

styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
