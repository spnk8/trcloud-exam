const array1 = [
  { code: 101, name: "AAA" },
  { code: 102, name: "BBB" },
  { code: 103, name: "CCC" }
];

const array2 = [
  { code: 103, city: "Singapore" },
  { code: 102, city: "Tokyo" },
  { code: 101, city: "Bangkok" }
];

const output = array1.map(a => {
  const match = array2.find(b => b.code === a.code);
  return {
    code: a.code,
    name: a.name,
    city: match.city,
  }
});
console.log(output)
