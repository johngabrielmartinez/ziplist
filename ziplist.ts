const zipList = (list1: string[], list2: number[]): (string | number)[] => {
  const result: (string | number)[] = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
};

const zipListTheFunctionalWay = (
  list1: string[],
  list2: number[],
): (string | number)[] => list1.reduce<(string | number)[]>((acc, item, index) => {
  acc.push(item, list2[index]);
  return acc;
}, []);

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
