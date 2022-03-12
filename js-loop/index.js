const arry = [1, 2, 3, 4, 5, 6];
var arry2 = [];
var cities = [
  { name: "Toronto", code: "TR" },
  { name: "Hellcife", code: "HL" },
];
arry.forEach((item) => arry2.push(item + 1)); //retorna
arry.map((item) => arry2.push(item + 1)); //
arry2 = arry.filter((item) => item % 2 === 0);

//
let filteredCities = cities.filter((city) => city.name.includes("ife"));
console.log(filteredCities);
