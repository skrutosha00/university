export default function declOfNum(n) {
  let wordForms = ["комментарий", "комментария", "комментариев"];

  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return wordForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return wordForms[1];
  }
  if (n1 == 1) {
    return wordForms[0];
  }
  return wordForms[2];
}
