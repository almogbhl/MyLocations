function sortByAlphabeticalOrder(data, type) {
  let output = [...data];

  if (type === "locations") {
    output.sort(function(a, b) {
      var nameA = a.name.value.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.value.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else {
    output.sort(function(a, b) {
      var nameA = a.toUpperCase(); // ignore upper and lowercase
      var nameB = b.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
  return output;
}

export default sortByAlphabeticalOrder;
