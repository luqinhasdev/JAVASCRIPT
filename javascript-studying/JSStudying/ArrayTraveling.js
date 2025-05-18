const array = [1, 2, 3, 4, 5];

for (const i of array) {
  document.body.innerText += i;
}
//
array.forEach((i) => {
  document.body.innerText += i;
});
//
const ArrayMap = array.map((i) => {
  return i * 2;
});

const ArrayFilter = array.filter((i) => i % 2 == 0);

const ArrayEvery = array.every((i) => typeof i == "number");

const ArraySome = array.some((i) => {
  return typeof i != "number";
});

const ArrayFind = array.find((i) => {
  i % 2 == 0;
});

const ArrayFindIndex = array.findIndex((i) => {
  i % 2 == 0;
});

const ArrayReduce = array.reduce((acc, i) => {
  document.body.innerText += acc + "," + i + " --- ";
  return acc + i;
}, 0);
