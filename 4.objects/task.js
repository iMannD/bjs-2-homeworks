function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.push(...marks)
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
