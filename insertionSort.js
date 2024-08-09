function InsertionSort(list, sortedList = []) {
  if (list.length === 0) return sortedList;
  let first = list[0];
  return InsertionSort(list.slice(1), Insert(first, sortedList));
}

function Insert(x, list = []) {
  if (list.length === 0) return [x];
  let first = list[0];
  if (first > x) {
    return [x, first].concat(list.slice(1));
  }

  return [first].concat(Insert(x, list.slice(1)));
}

console.log(InsertionSort([22, 23, 1, 2, 312,31,23,12,312,3,12,31,23,12,3,124,34,5324,534,65,487,3423,64,5343,24512,42,56,37,421,42536,13223, 21]));
