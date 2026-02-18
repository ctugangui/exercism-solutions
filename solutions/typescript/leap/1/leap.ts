export function isLeap(year: number): boolean {
  // FIRST ATTEMPT 
  // if (year % 4 === 0) {
  //   if (year % 100 === 0) {
  //     if (year % 400 === 0) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } else {
  //     return true
  //   }
  // } else {
  //   return false
  // }

  // SECOND ATTEMPT - cleaner
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);


  // throw new Error('Remove this line and implement the function')
}
