// const test = {
//   a: function () {
//     console.log(this);
//   },
//   b: () => {
//     console.log(this);
//   },
// };

// test.a();
// test.b();

// const f = new Number(273);
// console.log(typeof f);
// f.sample = 10;
// console.log(f.sample);
// console.log(f);

// Number.prototype.power = function (n = 2) {
//   return this.valueOf() ** n;
// };

// const a = 12;
// console.log("a.powerof():", a.power());
// console.log("a.powerof(3):", a.power(3));
// console.log("a.powerof(4):", a.power(4));

const j = "안녕하세요";

console.log(j.indexOf("안녕"), j.indexOf("하세"), j.indexOf("없는 문자열"));

String.prototype.contain = function (data) {
  return this.indexOf(data) >= 0;
};

Array.prototype.contain = function (data) {
  return this.indexOf(data) >= 0;
};

const a = "안녕하세요";
console.log("안녕 in 안녕하세요", a.contain("안녕"));
console.log("없는데 in 안녕하세요", a.contain("없는데"));

const b = [273, 32, 103, 57, 52];
console.log("273 in [273,32,103,57,52]", b.contain(273));
console.log("0 in [273,32,103,57,52]", b.contain(0));

const i = 123.456789;
console.log(i.toFixed(2));
console.log(i.toFixed(3));
console.log(typeof i.toFixed(4));
const stringA = `  메시지를 입력하다보니 앞에 줄바꿈도 들어가고  `;

console.log(stringA.split(" ").join(""), stringA.trim());

const data = [
  {
    name: "혼자 공부하는 파이썬",
    price: 18000,
    publisher: "한빛미디어",
  },
  {
    name: "혼자 공부하는 파이썬2",
    price: 25000,
    publisher: "한빛미디어",
  },
];

console.log(JSON.stringify(data));
console.log(JSON.stringify(data, null, 2));

const json = JSON.stringify(data);
console.log(JSON.parse(json));

const num = Math.random();

console.log("0-1", num);
console.log("0-10", num * 10);
console.log("0-50", num * 50);

console.log(num * (10, -5), Math.floor(num * (10, -5)));

const obj = {
  name: "혼자 공부하는 파이썬2",
  price: 25000,
  publisher: "한빛미디어",
};

if (obj.name) console.log("name 속성이 있습니다.");
if (obj.author) console.log("author 속성이 있습니다.");

const { name, price } = obj;

console.log(name, price);

const { c = name, d = price } = obj;
console.log(c, d);
