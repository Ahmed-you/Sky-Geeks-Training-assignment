// task 2

//this function takes an array of numbers and then returns the sum and the avg of that array
const calcSumAndAvg = (arr) => {
  const sum = arr.reduce((accumulator, item) => {
    return accumulator + item;
  }, 0);

  const average = sum / arr.length;

  return {
    sum,
    average,
  };
};
const numbers = [1, 2, 3, 4, 5, 54, 2, 3, 41];
const { average, sum } = calcSumAndAvg(numbers);
console.log("that is the avg: " + average, "that is the sum: " + sum);

//task 3

// i believe that i cant identify & remove duplicates with out any sort of iteration over the array
// so I can't do it in constant time complexity, but i think i can achieve a solution with O(n)time complexity
//using (Set) which i think is very efficient for this task.

const removeDuplicates = (arr) => {
  //remove any duplicates
  const uniqueSet = new Set(arr);

  const result = [];
  uniqueSet.forEach((element) => {
    result.push(element);
  });
  return result;
};
const arrayOfNames = ["ahmed", "sara", "ahmed", "ali", "ali", "sara"];
console.log(removeDuplicates(arrayOfNames));
