// 1
export function totalBirdCount(birdsPerDay) {
  let total = 0;

  for (let index = 0; index < birdsPerDay.length; index += 1) {
    total += birdsPerDay[index];
  }

  return total;
}

// 2
export function birdsInWeek(birdsPerDay, week) {
  let total = 0;

  const firstIndex = week * 7 - 7;
  const lastIndex = firstIndex + 7;

  for (let index = firstIndex; index < lastIndex; index += 1) {
    total += birdsPerDay[index];
  }

  return total;
}

// 3
export function fixBirdCountLog(birdsPerDay) {

  for (let index = 0; index < birdsPerDay.length; index += 1) {
    if (index % 2 === 0) birdsPerDay[index] += 1;
  }

  return birdsPerDay;
}
