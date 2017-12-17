// Code your solution here!

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    let newStr = string.slice(1)
    printString(newStr)
  }
  return true
}

function reverseString(string) {
  if (string.length > 1) {
    let newStr = string.slice(0, string.length - 1)
    return string[string.length-1] + reverseString(newStr)
  }
  return string
}

function isPalindrome(string) {
  if (string.length < 2) return true
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1))
  }
  return false
}

function addUpTo(arr, pos) {
  if (pos < 1) return arr[pos]
  return arr[pos] + addUpTo(arr, pos - 1)
}

function maxOf(arr, max = arr[0]) {
  if (arr.length === 1) return Math.max(max, arr[0])
  return max > arr[0] ? maxOf(arr.slice(1), max) : maxOf(arr.slice(1), arr[0])
}

function includesNumber(arr, number) {
  if (arr.length <= 0) return false
  if (arr[0] === number) return true
  return includesNumber(arr.slice(1), number)
}
