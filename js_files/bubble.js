let bubbleSort = document.getElementById("bubbleSort");
bubbleSort.addEventListener("click", bblSort);
 async function bblSort() {
    console.log('bubble');
    disableSortingButtons();
    document.getElementById("sortingDesicription").innerHTML = `
    <div class="sortInfo">
    <article class="sortInfoArticle">
     <h2> Bubble Sort</h2>
     <p>
     <a href="https://www.geeksforgeeks.org/bubble-sort/" target="_blank">Bubble Sort</a> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems
     <p>
     </article>
     <aside class="sortInfoAside">
      <h3> Performance </h3>
      <table>
       <tbody>
         <tr> 
         <td>Worst Case Time Complexity</td>
         <td class="mx-2"> O(n<sup>2</sup>)</td>
         </tr>
         <tr> 
         <td>Average Case Time Complexity </td>
         <td class="mx-2"> O(n<sup>2</sup>)</td>
         </tr>
         <tr> 
         <td>Best Case Time Complexity</td>
         <td class="mx-2"> O(n)</td>
         </tr>
         <tr> 
         <td>Worst Case Space Complexity</td>
         <td class="mx-2"> O(1)</td>
         </tr>
       <tbody>
      </table>
     <aside>
    </div>
    `;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const transform1 = document.getElementById(`bar${j}`);
      const transform2 = document.getElementById(`bar${j+1}`);
      transform1.style.backgroundColor="#ffe400";
      transform2.style.backgroundColor="#ffe400";
      if (array[j] > array[j + 1]) { 
        await swap_bubble(array[j], array[j + 1], j, j + 1);
        let temp=array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
      }
      transform1.style.backgroundColor="#5cdb95";
      transform2.style.backgroundColor="#5cdb95";
    }
    document.getElementById(`bar${array.length-i-1}`).style.backgroundColor="red";
  }
  document.getElementById(`bar${0}`).style.backgroundColor="red";
  enableSortingButtons();
//   console.log(array);
}

 function swap_bubble(el1, el2, i, j) {
  return new Promise(resolve => {
  setTimeout((time) => {
  const transform1 = document.getElementById(`bar${i}`);
  const transform2 = document.getElementById(`bar${j}`);
  el1=array[j]*3;
  el2=array[i]*3;
  transform1.style.height = `${el1}px`;
  transform2.style.height = `${el2}px`;
  resolve('Done');
  },time);
});
}
