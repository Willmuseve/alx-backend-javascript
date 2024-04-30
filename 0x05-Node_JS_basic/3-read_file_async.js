const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    const students = {
      CS: [],
      SWE: [],
    };
    const fields = {
      CS: 0,
      SWE: 0,
    };

    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().split('\n');

      for (let i = 0; i < lines.length; i += 1) {
        if (lines[i]) {
          const fieldsArr = lines[i].toString().split(',');

          const field = fieldsArr[3];

          if (field === 'CS' || field === 'SWE') {
            fields[field] += 1;
            students[field].push(fieldsArr[0]);
          }
        }
      }

      const totalStudents = students.CS.length + students.SWE.length;

      console.log(`Number of students: ${totalStudents}`);

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
