export const extractValue = (excel) => {
  return excel[1];
};

export const extractContracts = (excel) => {
  excel.slice(5);
};

// extract all the first element in array 
// extract contract list
export const extractIDs = (excel) => {
  return excel.map(([first]) => first).join(", ");
};
