function Student(name, gender, age) {
  name,
  gender,
  age,
  marks = []
}

Student.prototype.setSubject = function (subjectName) {
  subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.concat(marks)
  }
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
