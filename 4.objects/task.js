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
  if (this.marks === undefined) {
    return 0;
  }
  return this.marks.reduce( (a, b) => a + b) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject
  delete this.marks
  this.excluded = reason;
}
