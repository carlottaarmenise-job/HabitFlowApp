export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // formato: '2025-07-03'
};

export const isNewDay = (lastDate) => {
  return getTodayDate() !== lastDate;
};
