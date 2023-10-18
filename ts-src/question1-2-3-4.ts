// //////////////////////question 1//////////////////////////
const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (obj: object) => {
  // let [[aName, aSalary], [bName, bSalary], [cName, cSalary]] =
  //   Object.entries(obj);
  // const max = Math.max(aSalary, bSalary, cSalary);
  // return max === aSalary ? aName : max === bSalary ? bName : cName;

  // let objInArr = Object.entries(obj);
  // const [[name]] = objInArr.filter(
  //   (item) => item[1] === Math.max(...objInArr.map((i) => i[1]))
  // );
  // return name;

  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
};
console.log(topSalary(salaries));

// //////////////////////question 2//////////////////////////
const sortFromHightoLow = (...args: any): Array<number> => {
  let mainArr = args.flat();
  mainArr.sort((a: any, b: any) => b - a);
  return mainArr;
};

console.log(sortFromHightoLow([5, 6, 2], [3, 7, 1], [2, 4, 8]));

// //////////////////////question 3//////////////////////////
type wordsType = Array<string>;
const words: wordsType = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];
const aclean = (arr: wordsType): wordsType => {
  let newArr: wordsType = arr.map((item) =>
    item.toLowerCase().split("").sort().join("")
  );

  // let result: wordsType = [];
  // newArr.forEach((i) => {
  //   if (!result.includes(i)) {
  //     result.push(i);
  //   }
  // });

  // return result.map((item) => arr[newArr.indexOf(item)]);

  let result = new Set(newArr);
  return [...result].map((item) => arr[newArr.indexOf(item)]);
};

console.log(aclean(words));

// //////////////////////question 4//////////////////////////

let map = new Map();
map.set("name", "John");
map.set("age", 25);
let keys = map.keys();

// Error: keys.push is not a function
// keys.push("more");

//  چون متغیر keys یک آبجکت است و برای یک آبجکت نمی توان از متد push که برای آرایه ها است استفاده کرد
// Because the keys variable is an object, and for an object, you cannot use the push method, which is for arrays.

//  چون یک آبجکت قابل شمارش است با استفاده از روش زیر میتوان این مشکل را برطرف کرد
let answer = [...keys];
answer.push("more");
console.log(answer);
