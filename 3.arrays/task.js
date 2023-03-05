function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr1.every((a, b) => a === arr2[b]);
}

function getUsersNamesInAgeRange(users, gender) {
  
}