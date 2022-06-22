let hour = 7;
const calculateHourlyWage = (hour) => {
  if (hour <= 4) {
    return hour * 50;
  } else if (hour <= 8) {
    return hour * 55;
  }
  return hour * 60;
};
const res = calculateHourlyWage(hour);
console.log(res);

//3,4,5,7,8,9
// const calculateHourlyWage = (hour) => {
// for(i = 0; i<= 4;i++)
