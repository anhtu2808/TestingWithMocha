const doubleAfter2Second = async (number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number * 2);
      }, 1000);
    });
  }
  
  export default doubleAfter2Second;