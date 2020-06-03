/* eslint-disable no-unused-vars */
const ctaArray = [
  "Tab Name",
  "Faculty",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL",
  "Tab Name",
  "Staff",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL",
  "./img/example",
  "John Doe",
  "This is 2021",
  "Summary LOL"
];

const keys = ["Tab Name"];
const result = ctaArray.reduce(
  (i => (r, s) => {
    if (s === keys[0]) {
      r.push([]);
      i++;
    }
    r[r.length - 1].push(s);
    return r;
  })(0),
  []
);

const newResult = [];

result.forEach(element => {
  newResult.push(element.filter(s => s != "Tab Name"));
});

function chunkArray(array, chunkSize) {
  var result = [];
  while (array.length) {
    result.push(array.splice(0, chunkSize));
  }

  return result;
}

const object = newResult.map(a => {
  const [head, ...rest] = a;

  return Object.assign({
    tabName: head,
    profile: chunkArray(rest, 4).map(s =>
      Object.assign({
        imgPath: s[0],
        name: s[1],
        profession: s[2],
        overlaySummary: s[3]
      })
    )
  });
});

console.log(object[0].profile);
