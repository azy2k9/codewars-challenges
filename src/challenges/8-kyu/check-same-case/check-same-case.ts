function isLowerCase(input: string) {
  return input.charCodeAt(0) > 64 && input.charCodeAt(0) < 91;
}

function isUpperCase(input: string) {
  return input.charCodeAt(0) > 96 && input.charCodeAt(0) < 123;
}

export function sameCase(a: string, b: string) {
  if (
    (isLowerCase(a) && isLowerCase(b)) ||
    (isUpperCase(a) && isUpperCase(b))
  ) {
    return 1;
  } else if (
    (isLowerCase(a) && isUpperCase(b)) ||
    (isUpperCase(a) && isLowerCase(b))
  ) {
    return 0;
  }

  return -1;
}
