let insertionSort = document.getElementById("insertionSort");
insertionSort.addEventListener("click", insertSort);
async function insertSort() {
  // console.log("insert");
  disableSortingButtons();
  // let
  document.getElementById("sortingDesicription").innerHTML = `
  <div class="sortInfo">
  <article class="sortInfoArticle">
   <h2> Insertion Sort</h2>
   <p>
   <a href="https://www.geeksforgeeks.org/insertion-sort/" target="_blank">Insertion Sort</a> is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.
   <p>
   </article>
   <aside class="sortInfoAside">
    <h3> Performance </h3>
    <table>
     <tbody>
       <tr> 
       <td>Worst Case Time Complexity</td>
       <td> O(n<sup>2</sup>)</td>
       </tr>
       <tr> 
       <td>Average Case Time Complexity </td>
       <td> O(n<sup>2</sup>)</td>
       </tr>
       <tr> 
       <td>Best Case Time Complexity</td>
       <td> O(n)</td>
       </tr>
       <tr> 
       <td>Worst Case Space Complexity</td>
       <td> O(1)</td>
       </tr>
     <tbody>
    </table>
   <aside>
  </div>
  `;
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      const transform1 = document.getElementById(`bar${j}`);
      const transform2 = document.getElementById(`bar${j + 1}`);
      transform1.style.backgroundColor = "#ffe400";
      transform2.style.backgroundColor = "#ffe400";
      await swap_insert(array[j], j + 1);
      array[j + 1] = array[j];
      j--;
      transform1.style.backgroundColor = "brown";
      transform2.style.backgroundColor = "brown";
    }
    array[j + 1] = key;
    await swap_insert(key, j + 1);
  }
  enableSortingButtons();
}
// console.log(array);
// }

function swap_insert(el1, i) {
  return new Promise((resolve) => {
    setTimeout((time) => {
      const transform1 = document.getElementById(`bar${i}`);
      el1 *= 3;
      transform1.style.height = `${el1}px`;
      resolve("Done");
    }, time);
  });
}
console.log(time);
