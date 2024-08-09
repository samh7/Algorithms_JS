function MergeSort1(list = []) {
  if (list.length < 2) return list;
  let [left, right] = GetLeftRightList([...list]);
  return MergeSort(MergeSort1(left), MergeSort1(right));
}
function MergeSort(left = [], right = []) {
  if (left.length === 0) return [...right];
  if (right.length === 0) return [...left];

  if (left[0] <= right[0]) {
    let leftFirst = left[0];
    return [leftFirst].concat(MergeSort([...left].slice(1), [...right]));
  } else {
    let rightFirst = right[0];
    return [rightFirst].concat(MergeSort([...left], [...right].slice(1)));
  }
}

function GetLeftRightList(list = []) {
  let len = list.length;
  let midPoint = Math.floor(len / 2);
  return [list.slice(0, midPoint), list.slice(midPoint)];
}

function isEqual(list1 = [], list2 = []) {
  return JSON.stringify(list1) === JSON.stringify(list2);
}

console.log(MergeSort1([13, 24546, 342, 1, 41234, 235, 1]));
