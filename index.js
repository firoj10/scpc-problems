//problem-1
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str.charAt(i);
    }
    return reversedStr;
  }
  
  // Test
  const inputString = "hello world";
  const reversedString = reverseString(inputString);
  console.log(reversedString); 








  //problem-2

  function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  // Test
  const inputs = [2, -5, 10, -3, 7];
  const res = sumOfPositiveNumbers(inputArray);
  console.log(result); 





   //problem-3
  
   function mostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequentElement = num;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test
  const inputArrays = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const results = mostFrequentElement(inputArray);
  console.log(result); 
  





     //problem-4

     function findTwoNumbersWithSum(arr, target) {
        const numMap = new Map();
      
        for (let i = 0; i < arr.length; i++) {
          const complement = target - arr[i];
          if (numMap.has(complement)) {
            return [numMap.get(complement), i];
          }
          numMap.set(arr[i], i);
        }
      
        return null; 
      }
      
      // Test
      const input = [1, 3, 6, 8, 11, 15];
      const targetValue = 9;
      const resul = findTwoNumbersWithSum(inputArray, targetValue);
      console.log(result); 
      




      //problem-5
      function calculator(num1, operator, num2) {
        switch (operator) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '*':
            return num1 * num2;
          case '/':
            return num1 / num2;
          default:
            return "Invalid operator";
        }
      }
      
      // Test
      const num1 = 5;
      const operator = '+';
      const num2 = 3;
      const allResult = calculator(num1, operator, num2);
      console.log(result); // Output: 8



       //problem-6
       function generateRandomPassword(length) {
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset.charAt(randomIndex);
        }
      
        return password;
      }
      
      // Test
      const passwordLength = 12;
      const randomPassword = generateRandomPassword(passwordLength);
      console.log(randomPassword); 
      





       //problem-7
       function romanToInteger(romanNumeral) {
        const romanNumeralsMap = {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000
        };
      
        let result = 0;
      
        for (let i = 0; i < romanNumeral.length; i++) {
          const currentNumeral = romanNumeral[i];
          const currentValue = romanNumeralsMap[currentNumeral];
          const nextValue = romanNumeralsMap[romanNumeral[i + 1]];
      
          if (nextValue > currentValue) {
            result += nextValue - currentValue;
            i++; 
          } else {
            result += currentValue;
          }
        }
      
        return result;
      }
      
      // Test
      const romanNumeral = "IX";
      const integerValue = romanToInteger(romanNumeral);
      console.log(integerValue); 
      






       //problem-8
       function secondSmallestElement(arr) {
        if (arr.length < 2) {
          return "Array should have at least two elements";
        }
      
        let smallest = Infinity;
        let secondSmallest = Infinity;
      
        for (let num of arr) {
          if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
          } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
          }
        }
      
        return secondSmallest;
      }
      
      // Test
      const inputArray = [5, 2, 8, 1, 7, 3];
      const result = secondSmallestElement(inputArray);
      console.log(result); 
      