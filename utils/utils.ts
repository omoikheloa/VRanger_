export const kebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const kebabArray = (arr: any[]) => arr.map((item) => kebabCase(item));

export const randomNumberText = (
  finalNum: string,
  setNumber: (value: string) => void // Explicitly type `setNumber`
) => {
  let count = 0;
  let newNum = "";

  const interval = setInterval(() => {
    count++;
    for (let i = 0; i < finalNum.length; i++) {
      newNum += Math.floor(Math.random() * 10); // Generate random numbers
    }
    setNumber(newNum); // Update the number
    newNum = ""; // Reset `newNum` for the next iteration

    if (count === 20) {
      clearInterval(interval); // Stop the interval after 20 counts
      setNumber("404"); // Set the final value to "404"
    }
  }, 80); // Interval delay in milliseconds
};