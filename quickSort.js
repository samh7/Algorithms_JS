//Quick Sort
function QuickSort(list = []) {
  if (list.length === 0) return [];
  let pivot = list[0];
  let restList = list.slice(1, list.length);
  let [left, right] = GetMinMaxList(pivot, restList);
  left = QuickSort(left);
  right = QuickSort(right);
  return left.concat([pivot].concat(right));
}

function GetMinMaxList(pivot, list = []) {
  let minList = [];
  let maxList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < pivot) {
      minList.push(list[i]);
    } else {
      maxList.push(list[i]);
    }
  }
  return [minList, maxList];
}
console.log(QuickSort([14, 16, 18, 19, 20, 321,312,3,123,2,43,5,2413,213,245,646,2,132,13,24546,342,41234,235,435,234,325,3,4,124,13,412,421,3, 1, 2, 4, 6, 8, 10, 12]));
