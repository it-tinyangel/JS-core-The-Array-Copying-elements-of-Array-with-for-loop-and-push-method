// Function for copying an elements of array preserving of the original array (cloning an array).
function arrCopy(arr) {
	const arrClone = [];
	for (let i = 0; i < arr.length; i++) {
		arrClone.push(arr[i]);
	}
	return arrClone;
}

// Call the function and write the result in a variable.
const arr1 = arrCopy([1, 2, 3]);
const arr2 = arrCopy([1, 2, 3, [10, 20]]);

// Outputing the result to the console.
console.log(`Copy of arr1:`, arr1);
console.log(`Copy of arr2:`, arr2);