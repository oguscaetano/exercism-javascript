export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake) return false;

  return true;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) return true;

  return false;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake && archerIsAwake === false) {
    return true;
  }

  return false;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (petDogIsPresent && archerIsAwake === false) return true;
  if (petDogIsPresent === false && knightIsAwake === false && archerIsAwake === false && prisonerIsAwake) return true;

  return false;
}
