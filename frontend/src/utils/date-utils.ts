export const displayDateInStandardFormat = (date: Date) => {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
};
