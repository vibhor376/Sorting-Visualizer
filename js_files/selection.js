let selectionSort = document.getElementById("selectionSort");
selectionSort.addEventListener("click", selectSort);
async function selectSort() {
  // console.log(array);
  console.log('select');
  disableSortingButtons();
  document.getElementById("sortingDesicription").innerHTML = `
  <div class="sortInfo">
  <article class="sortInfoArticle">
   <h2> Selection Sort</h2>
   <p>
   <a href="https://www.geeksforgeeks.org/selection-sort/" target="_blank">Selection Sort</a>  is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
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
       <td> O(n<sup>2</sup>)</td>
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
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      document.getElementById(`bar${j}`).style.background="#ffe400";
      await pleaseWait(time);
      if (array[min] > array[j]) {
        if(min!=i){
          document.getElementById(`bar${min}`).style.background="#5cdb95";
        }
        min = j;
      }else{
        document.getElementById(`bar${j}`).style.background="#5cdb95";
      }
    }
    
      const transform1 = document.getElementById(`bar${min}`);
      const transform2 = document.getElementById(`bar${i}`);
      transform1.style.backgroundColor = "#ffe400";
      transform2.style.backgroundColor = "#ffe400";
      // console.log(min,i);
      await swap_select(array[min], array[i], min, i);
      let temp = array[min];
      array[min] = array[i];
      array[i] = temp;
      transform1.style.backgroundColor = "purple";
      transform2.style.backgroundColor = "purple";
    
  }
  enableSortingButtons();
}

function swap_select(el1, el2, i, j) {
  return new Promise((resolve) => {
    setTimeout((time) => {
      const transform1 = document.getElementById(`bar${i}`);
      const transform2 = document.getElementById(`bar${j}`);
      // console.log(i);
      console.log(bars);
      el1 *= 3;
      el2 *= 3;
      console.log(transform2);
      transform1.style.height = `${el2}px`;
      transform2.style.height = `${el1}px`;
      resolve("Done");
    }, time);
  });
}
