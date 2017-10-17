/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  let newStr = '';

  for (var i = 0; i < str.length-1; i++) {
    // console.log(str[i])
    // var newStr = '';
    for (var j = 0; j < str.length; j++) {

       if (i === j) {
        // console.log('ini j doang --- ' + str[j])
        // console.log('ini j++ ' + str[j+1])
         newStr += str[j+1];
        // console.log(newStr)
         newStr += str[j];
         j++;
      }
      else {
        newStr += str[j];
      }

    }
    // console.log(newStr)
    if (isPalindrome(newStr)) {
    // console.log('masuk ksini')
      return true;
    }
  }
  // console.log(newStr)
  return false
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
