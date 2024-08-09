function BubbleSort1(list = []) {
  const sortedList = BubbleSort(list);
  if (isEqual(sortedList, list)) return sortedList;
  return BubbleSort(sortedList)
}
function BubbleSort(list = []) {
  if (list.length < 2) return list;
  let first = list[0];
  let second = list[1];
  if (first > second) {
    return [second].concat(BubbleSort([first].concat(list.slice(2))));
  }
  return [first].concat(BubbleSort(list.slice(1)));
}
function isEqual(list1 = [], list2 = []) {
  return JSON.stringify(list1) === JSON.stringify(list2);
}
console.log(BubbleSort1([2, 12, 123, 4, 324]));
