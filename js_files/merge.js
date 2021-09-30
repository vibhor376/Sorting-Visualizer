let mergeSort=document.getElementById('mergeSort');
mergeSort.addEventListener('click',async function () {
    disableSortingButtons();
    document.getElementById("sortingDesicription").innerHTML = `
    <div class="sortInfo">
    <article class="sortInfoArticle">
     <h2> Merge Sort</h2>
     <p>
     <a href="https://www.geeksforgeeks.org/merge-sort/" target="_blank">Merge Sort</a> is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:
     <p>
     <ol>
     <li> Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted).</li>
     <li> Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</li> 
     </ol>
     </article>
     <aside class="sortInfoAside">
      <h3> Performance </h3>
      <table>
       <tbody>
         <tr> 
         <td>Worst Case Time Complexity</td>
         <td class="mx-2"> O(nlogn)</td>
         </tr>
         <tr> 
         <td>Average Case Time Complexity </td>
         <td class="mx-2"> O(nlogn)</td>
         </tr>
         <tr> 
         <td>Best Case Time Complexity</td>
         <td class="mx-2"> O(nlogn)</td>
         </tr>
         <tr> 
         <td>Worst Case Space Complexity</td>
         <td class="mx-2"> O(n)</td>
         </tr>
       <tbody>
      </table>
     <aside>
    </div>
    `;
    let start=0,end=array.length-1;
    await mgSort(start,end);
    enableSortingButtons();
});


async function mgSort(start,end){
    console.log(start,end);
    if(end<=start){return ;}
    let mid = (start+end)>>1;
    await mgSort(start, mid);
    await mgSort(mid + 1, end);
    await mergeArray(start, end);  
}
async function mergeArray(low, high) {
    console.log('In merge array');
    let mid = (low + high) >> 1;
    let n1=mid-low+1;
    let n2=high-mid;
    let left = new Array(n1);
    let right = new Array(n2); 

    for(let i=0;i<n1;i++){
        await pleaseWait(time);
        let elm=document.getElementById(`bar${low+i}`);
        elm.style.background='#ffe400';
        left[i]=parseInt(elm.style.height);
        console.log('Inner while loop');
        console.log(left[i]);
    }
    for(let i=0;i<n2;i++){
        await pleaseWait(time);
        let elm=document.getElementById(`bar${mid+i+1}`);
        elm.style.background='#ffe400';
        right[i]=parseInt(elm.style.height);
    }
    // await pleaseWait(seconds);
    let i=0,j=0,k=low;
    while (i<n1&&j<n2) {
        await pleaseWait(time);
        if (left[i] <= right[j]) {
        let elm=document.getElementById(`bar${k}`);
        elm.style.background='#ffe400';
        elm.style.height=`${left[i]}px`;
        elm.style.background='orange';
        k++;i++;
        }
        else {
        let elm=document.getElementById(`bar${k}`);
        elm.style.background='#ffe400';
        elm.style.height=`${right[j]}px`;
        elm.style.background='orange';
        k++;j++;
        }
    }

    while (i < n1) {
        await pleaseWait(time);
        let elm=document.getElementById(`bar${k}`);
        elm.style.background='#ffe400';
        elm.style.height=`${left[i]}px`;
        elm.style.background='orange';
        k++;i++;
    }

    while (j < n2) {
        await pleaseWait(time);
        let elm=document.getElementById(`bar${k}`);
        elm.style.background='#ffe400';
        elm.style.height=`${right[j]}px`;
        elm.style.background='orange';
        k++;j++;
    }
}

