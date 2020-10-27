//for loop
function writeCards(arr, event) {
  let thankYou = []

  for (let i = 0; i < arr.length; i++) {
    thankYou.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return thankYou
}
//test
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"))


//while loop
function countDown(integer) {
  let i = integer;
  while (i > -1) {
    console.log(i--);
  }
}
//test
console.log(countDown(10))