// Object
var resize = {
  width: 40,
  text: "sjdsjd",
  calc: function () {
    console.log("teste");
  },
};
var { width } = resize;
console.log(width);
//Array

function teste({ value, id }) {}

props = {
  value: "filme",
  id: "id",
};

teste(props);
console.log("Arrays");
var arry = [1, 2, 3, 4];
var arry2 = [...arry];
console.log(arry, arry2);
arry2.push(5);

console.log(arry, arry2);
console.log(Math.max(...arry))
