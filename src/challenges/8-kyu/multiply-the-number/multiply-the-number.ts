export function multiply(n: number) {
  return n * 5 ** n.toString().replace(/[^\d]/, "").length;
}
