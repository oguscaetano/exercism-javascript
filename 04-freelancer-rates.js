export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / ratePerHour / 8);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDaysPerMonth = 22;
  const fullMonths = Math.floor(numDays / billableDaysPerMonth);

  const dailyRate = dayRate(ratePerHour);
  const monthlyRate = billableDaysPerMonth * dailyRate;
  const monthlyDiscountedRate = (1 - discount) * monthlyRate;
  
  const remainingDays = numDays % billableDaysPerMonth;
  const remainingDaysRate = remainingDays * dailyRate;

  return Math.ceil((fullMonths * monthlyDiscountedRate) + remainingDaysRate);
}