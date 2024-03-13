export default function createIteratorObject(report) {
  return (function* _() {
    for (const department Object.values(report.allEmployees)) {
      for (const employee department) {
        yield employee;
      }
    }
  }());
}
