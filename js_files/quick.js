let quickSort=document.getElementById('quickSort');
quickSort.addEventListener('click',async function () {
    disableSortingButtons();
    document.getElementById("sortingDesicription").innerHTML = `
    <div class="sortInfo">
    <article class="sortInfoArticle">
     <h2> Quick Sort</h2>
     <p>
     <a href="https://www.geeksforgeeks.org/quick-sort/" target="_blank">Quick Sort</a>  is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are:
     <ol>
     <li> Pick an element, called a pivot, from the array. This is usually done at random.</li>
     <li> Move pivot element to the end of the array.</li>
     <li> Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.</li>
     <li> Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.</li>
     </ol>
     The base case of the recursion is an array of size zero or one, which are sorted by definition.
     </p>
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
         <td> O(nlogn)</td>
         </tr>
         <tr> 
         <td>Best Case Time Complexity</td>
         <td> O(nlogn)</td>
         </tr>
         <tr> 
         <td>Worst Case Space Complexity</td>
         <td> O(logn)</td>
         </tr>
       <tbody>
      </table>
     <aside>
    </div>
    `;
    let start=0,end=array.length-1;
    await qSort(start,end);
    enableSortingButtons();
});

async function qSort(start,end){
    // console.log(start,end);
    if(start < end){
    let mid = await partition(start, end);
    await qSort(start, mid-1);
    await qSort(mid + 1, end);  
    }else{
        if(start >= 0 && end >= 0 && start <array.length && end <array.length){
            document.getElementById(`bar${start}`).style.background = 'cyan';
            document.getElementById(`bar${end}`).style.background = 'cyan';
        }
    }   
}
async function partition(low, high)
{
    let pivot = array[high];
    let i = (low - 1);
    document.getElementById(`bar${high}`).style.backgroundColor='red';
    for (let j = low; j <= high- 1; j++)
    {
        document.getElementById(`bar${j}`).style.backgroundColor="#ffe400";
        await pleaseWait(time);

        if (array[j] <= pivot)
        {
            i++; 
            swapQuickSort(i, j);
            let temp=array[j];
            array[j]=array[i];
            array[i]=temp;
            await pleaseWait(time);
        }
    }
    await pleaseWait(time);
    swapQuickSort(i + 1, high);
    document.getElementById(`bar${i+1}`).style.backgroundColor="cyan";
    let temp=array[high];
    array[high]=array[i+1];
    array[i+1]=temp;
    await pleaseWait(time);
    return (i + 1);
}

function swapQuickSort(i,j) {
    document.getElementById(`bar${i}`).style.backgroundColor="pink";
    document.getElementById(`bar${j}`).style.backgroundColor="pink";
    let h1=document.getElementById(`bar${j}`).style.height;
    let h2=document.getElementById(`bar${i}`).style.height;
    // console.log(h1,h2);
    h1=parseInt(h1);
    h2=parseInt(h2);
    document.getElementById(`bar${i}`).style.height=`${h1}px`;
    document.getElementById(`bar${j}`).style.height=`${h2}px`;
}