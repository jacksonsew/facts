function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function checkEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
  }

  // Generate a random number between 1 and 10
  var randomNumber = getRandomNumber(1, 10);

  // Check if the number is even or odd
  var result = checkEvenOrOdd(randomNumber);
