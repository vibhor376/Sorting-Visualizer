let bubbleSort = document.getElementById("bubbleSort");
bubbleSort.addEventListener("click", bblSort);
 async function bblSort() {
    console.log('bubble');
    disableSortingButtons();
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
    document.getElementById(`bar${array.length-i-1}`).style.backgroundColor="#eee2dc";
  }
  document.getElementById(`bar${0}`).style.backgroundColor="#eee2dc";
  enableSortingButtons();
//   console.log(array);
}

 function swap_bubble(el1, el2, i, j) {
  return new Promise(resolve => {
  setTimeout((time) => {
  const transform1 = document.getElementById(`bar${i}`);
  const transform2 = document.getElementById(`bar${j}`);
  el1=array[j]*5;
  el2=array[i]*5;
  transform1.style.height = `${el1}px`;
  transform2.style.height = `${el2}px`;
  resolve('Done');
  },time);
});
}
