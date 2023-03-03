export function openOrSenior(members: Array<[number, number]>) {
  return members.map((member) => {
    const age = member[0];
    const handicap = member[1];

    if (age >= 55 && handicap > 7) {
      return "Senior";
    }
    return "Open";
  });
}
