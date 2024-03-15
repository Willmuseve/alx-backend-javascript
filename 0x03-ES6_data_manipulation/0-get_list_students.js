def getListStudents():
    students = [
        {"id": 1, "firstName": "Guillaume", "location": "San Francisco"},
        {"id": 2, "firstName": "James", "location": "Columbia"},
        {"id": 5, "firstName": "Serena", "location": "San Francisco"}
    ]
    return students

# Example usage:
students_list = getListStudents()
for student in students_list:
    print(student)
