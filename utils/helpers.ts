export function generateRandomUniqueArray(length:number) {
    const min = 0;
    const max = 19;
    const uniqueSet = new Set();
  
    while (uniqueSet.size < length) {
      const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueSet.add(randomInt);
    }
  
    return Array.from(uniqueSet);
  }