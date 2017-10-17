/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */



/*
r a c e c a r
0 1 2 3 4 5 6

a r c e c a r
1 0 2 3 4 5 6

r c a e c a r
0 2 1 3 4 5 6

r a e c c a r
0 1 3 2 4 5 6
*/



function palindromeSwapper(str)
{
  if (isPalindrome(str)) return true;
  else
  {
    for (var i = 0; i < str.length - 1; i++)
    {
      let newStr = '';
      for (var j = 0; j < str.length; j++)
      {
        if (i === j)
        {
          newStr += str[j + 1];
          newStr += str[j];
          j++;
        }
        else
        {
          newStr += str[j];
        }
      }
      if (isPalindrome(newStr)) return true;
    }
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str)
{
  let word = str;
  if (str.split('').reverse().join('') === word) return true;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
