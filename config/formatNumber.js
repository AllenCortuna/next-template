export const formatNumber = (number) => {
  // Convert number to string if it's not already
  number = number.toString();

  // Check if number contains decimal point
  if (!number.includes(".")) {
    number += ".00";
  }

  // Regular expression to add commas
  return number.replace(/\d(?=(\d{3})+(\.|$))/g, "$&,");
};
