"use strict";

const fs = require("fs");

/*
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function abbreviation(a, b) {
  // Write your code here
  if (a.length < 1 || a.length > 1000) {
    return "NO";
  }
  if (b.length < 1 || b.length > 1000) {
    return "NO";
  }
  if (a.length < b.length) return "NO";
  if (!a.match(/^[A-Za-z]+$/) || !b.match(/^[A-Z]+$/)) return "NO";
  let counter = b.length;
  let a_shadow = new Array(a.length).fill(0);
  for (let i = 0; i < a.length && counter > 0; i++) {
    if (
      b[b.length - counter] == a[i] ||
      (b[b.length - counter] == a[i].toUpperCase() &&
        a[i].toUpperCase() != a[i])
    ) {
      a_shadow[i] = 1;
      counter--;
    }
  }
  let rz = "";
  for (let i = 0; i < a.length; i++) {
    if (a_shadow[i] == 1) {
      rz += a[i].toUpperCase();
    }
  }
  if (rz != b || counter != 0) {
    return "NO";
  }

  for (let i = 0; i < a.length; i++) {
    if (a_shadow[i] == 0 && a[i].toLowerCase() != a[i]) return "NO";
  }
  return "YES";
}

function main() {
  let buffer = [1, "DkaK", "KK"];
  console.log("Buffer is");
  for (let qItr = 1; qItr < parseInt(buffer[0]) * 2 + 1; qItr = qItr + 2) {
    const a = buffer[qItr];
    const b = buffer[qItr + 1];

    const result = abbreviation(a, b);

    console.log(result + "\n");
  }
}
main();
