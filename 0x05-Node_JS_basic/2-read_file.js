const fs = require('fs');

//the func that accepsts an argument
function countStudents(filepath) {
  try {
    const fileItems = fs.readFileSync(filepath, 'utf-8');
    const lines = fileItems.trim().split('\n');

    const students = {
      CS: [],
      SWE: [],
    };
    const fields = {
      CS: 0,
      SWE: 0,
    };

    for (const line of lines) {
      const fieldsArr = line.split(',');

      if (fieldsArr.length >= 4) {
        const field = fieldsArr[3].trim();
        if (field === 'CS' || field === 'SWE') {
          fields[field] += 1;
          students[field].push(fieldsArr[0].trim());
        }
      }
    }

    const total = students.CS.length + students.SWE.length;

    console.log(`Number of students: ${total}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
