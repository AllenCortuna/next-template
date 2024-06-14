export const filterSignatury = (array) => {
  // Create an object to store unique keys
  const uniqueKeys = {};

  // Filter the array based on the first item (index 0) of each sub-array
  const uniqueArray = array.filter((subArray) => {
    // Check if the length of the sub-array is exactly 13
    if (subArray.length === 3) {
      const key = subArray[0];

      // Check if the key is already present in uniqueKeys
      // If not, add it and return true to keep the sub-array
      if (!uniqueKeys[key]) {
        uniqueKeys[key] = true;
        return true;
      }
    }

    // If the length is not 13 or the key is already present, return false to filter out the sub-array
    return false;
  });

  return uniqueArray;
}