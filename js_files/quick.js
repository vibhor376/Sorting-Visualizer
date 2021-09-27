let quickSort=document.getElementById('quickSort');
quickSort.addEventListener('click',async function () {
    disableSortingButtons();
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
            document.getElementById(`bar${start}`).style.background = '#eee2dc';
            document.getElementById(`bar${end}`).style.background = '#eee2dc';
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
    document.getElementById(`bar${i+1}`).style.backgroundColor="#eee2dc";
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