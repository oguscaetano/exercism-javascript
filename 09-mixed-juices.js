// 1
export function timeToMixJuice(name) {

  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    
    case 'Energizer':
      return 1.5;

    case 'Green Garden':
      return 1.5;

    case 'Tropical Island':
      return 3;

    case 'All or Nothing':
      return 5;
      
    default: 
      return 2.5;
  }
};

// 2
export function limesToCut(wedgesNeeded, limes) {
  let totalSlice = 0;
  let totalLimes = 0;

  for (let index = 0; index < limes.length; index += 1) {
    if (totalSlice < wedgesNeeded) {
      switch (limes[index]) {
        case 'small':
          totalSlice += 6;
          totalLimes += 1;
          break;
        case 'medium':
          totalSlice += 8;
          totalLimes += 1;
          break;
        case 'large':
          totalSlice += 10;
          totalLimes += 1;
          break;
      }
    }
  }
  return totalLimes;
};

// 3
export function remainingOrders(timeLeft, orders) {
  
  let index = 0;

  do {
    if (index <= orders.length) {
      const juiceTime = timeToMixJuice(orders[index]);
      timeLeft -= juiceTime;
      index += 1;
    }
  } while (timeLeft > 0);

  return orders.slice(index);
};
