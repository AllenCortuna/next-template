export const convertToDate = (int) => {
  const baseDate = new Date("1900-01-01");
  const targetDate = new Date(
    baseDate.getTime() + (int - 2) * 24 * 60 * 60 * 1000
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[targetDate.getMonth()];
  const day = targetDate.getDate();
  const year = targetDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

export function dateSuffix(day) {
  let suffix;
  const num = new Date(day).getDate();
  switch (true) {
    case num == 1 || num == 21 || num == 31:
      suffix = "st";
      break;
    case num == 2 || num == 22:
      suffix = "nd";
      break;
    case num == 3 || num == 23:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  return `${num}${suffix}`;
}

export function suffix(day) {
  let suffix;
  const num = day.getDate();
  switch (true) {
    case num == 1 || num == 21 || num == 31:
      suffix = "st";
      break;
    case num == 2 || num == 22:
      suffix = "nd";
      break;
    case num == 3 || num == 23:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  return `${suffix}`;
}

export function toTitleCase(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
