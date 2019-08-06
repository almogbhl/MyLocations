function randomOrder(data, type) {
  let output = [...data];
  let result = [];

  result = shuffleArray(output);

  return result;
}

export default randomOrder;

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}
