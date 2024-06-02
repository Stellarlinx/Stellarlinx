// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to find the maximum number in an array
  function findMax(numbers) {
    if (numbers.length === 0) {
      return undefined;
    }
  
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  // Example usage
  console.log(square(5)); // Output: 25
  console.log(isEven(6)); // Output: true
  console.log(findMax([3, 6, 2, 9, 4])); // Output: 9
