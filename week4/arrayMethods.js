 //push method
 const arr1 = [1, 2, 3];
 arr1.push(4);
 const arr2 = ["Stimpson", "J", "cat"];
 arr2.push(["happy", "joy"]);

 //pop method
 const threeArr = [1, 4, 6];
 const oneDown = threeArr.pop();
 //console.log(oneDown);
 //console.log(threeArr);

 //shift method
 const ourArray1 = ["Stimpson", "J", ["cat"]];
 const removedFromOurArray = ourArray1.shift();

 //unshift method
 const ourArray2 = ["Stimpson", "J", "cat"];
 //ourArray2.shift();
 ourArray2.unshift("Happy");

 //for loop
 const arr = [10, 9, 8, 7, 6];

 for (let i = 0; i < arr.length; i++) {
 console.log(arr[i]);
 }