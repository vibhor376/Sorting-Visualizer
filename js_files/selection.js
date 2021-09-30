let selectionSort = document.getElementById("selectionSort");
selectionSort.addEventListener("click", selectSort);
async function selectSort() {
  // console.log(array);
  console.log('select');
  disableSortingButtons();
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
      el1 *= 5;
      el2 *= 5;
      console.log(transform2);
      transform1.style.height = `${el2}px`;
      transform2.style.height = `${el1}px`;
      resolve("Done");
    }, time);
  });
}
