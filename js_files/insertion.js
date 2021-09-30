let insertionSort = document.getElementById("insertionSort");
insertionSort.addEventListener("click", insertSort);
async function insertSort() {
  console.log('insert');
  disableSortingButtons();
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      const transform1 = document.getElementById(`bar${j}`);
      const transform2 = document.getElementById(`bar${j+1}`);
      transform1.style.backgroundColor = "#ffe400";
      transform2.style.backgroundColor = "#ffe400";
      await swap_insert(array[j], j + 1);
      array[j + 1] = array[j];
      j--;
      transform1.style.backgroundColor = "brown";
      transform2.style.backgroundColor = "brown";
    }
    array[j + 1] = key;
    await swap_insert(key, j+1);
  }
  enableSortingButtons();
}
  // console.log(array);
// }

 function swap_insert(el1, i) {
  return new Promise((resolve) => {
    setTimeout((time) => {
      const transform1 = document.getElementById(`bar${i}`);
      el1 *= 5;
      transform1.style.height = `${el1}px`;
      resolve("Done");
    }, time);
  });
  
}
console.log(time);
