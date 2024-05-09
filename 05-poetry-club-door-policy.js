export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  const capitalizeWord = word.toLowerCase();
  return capitalizeWord[0].toUpperCase() + capitalizeWord.substring(1);
}

export function backDoorResponse(line) {
  const trimString = line.trim();
  return trimString[trimString.length - 1];
}

export function backDoorPassword(word) {
  const finalString = frontDoorPassword(word);
  return `${finalString}, please`;
}
