function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr1.every((a, b) => a === arr2[b]);
}

function getUsersNamesInAgeRange(users, gender) {
  let usersByGender = users.filter(user => user.gender === gender);
  let usersAges = usersByGender.map(user => user.age);
  let avg = usersAges.reduce()
}