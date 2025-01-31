/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = (n) => {
  if (n > 100) return 'the number is too large';

  const dollars = Math.floor(n);
  let change = n - dollars;

  const quarters = Math.floor(change / 0.25);
  change -= quarters * 0.25;

  const dimes = Math.floor(change / 0.1);
  change -= dimes * 0.1;

  const nickels = Math.floor(change / 0.05);
  change -= nickels * 0.05;

  const pennies = Math.round(change / 0.01);

  const res = [];

  if (dollars > 0) res.push(`${dollars} dollar${dollars > 1 ? 's' : ''}`);
  if (quarters > 0) res.push(`${quarters} quarter${quarters > 1 ? 's' : ''}`);
  if (dimes > 0) res.push(`${dimes} dime${dimes > 1 ? 's' : ''}`);
  if (nickels > 0) res.push(`${nickels} nickel${nickels > 1 ? 's' : ''}`);
  if (pennies > 0) res.push(`${pennies} penn${pennies > 1 ? 'ies' : 'y'}`);

  return res.join(', ');
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
