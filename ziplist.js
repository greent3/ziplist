function zipList(list1, list2) {
  const list3 = [];
  for (let i = 0; i < list1.length; i++) {
    list3.push(list1[i]);
    list3.push(list2[i]);
  }
  return list3;
}

function zipListTheSimpleWay(list1, list2) {
  const newList = _.zip(list1, list2);
  return _.flatten(newList);
}

const pracList2 = ['a', 'b', 'c'];
const pracList1 = [1, 2, 3];

console.log(zipList(pracList1, pracList2));
console.log(zipListTheSimpleWay(pracList1, pracList2));
