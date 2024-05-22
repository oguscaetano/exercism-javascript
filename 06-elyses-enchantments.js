// 1
export function getItem(cards, position) {
  return cards[position];
}

// 2
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

// 3
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

// 4
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

// 5
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

// 6
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

// 7
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

// 8
export function checkSizeOfStack(cards, stackSize) {
  // if (cards.length === stackSize) return true;

  // return false;

  return cards.length === stackSize ? true : false;
}
