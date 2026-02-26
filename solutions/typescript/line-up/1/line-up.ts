export function format(name: string, number: number): string {
  // let endingString = '';

  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  //old
  // if([11, 12, 13].includes(lastTwoDigits)) {
  //   endingString = 'th';
  // } else if (lastDigit === 1) {
  //   endingString = 'st';
  // } else if (lastDigit === 2) {
  //   endingString = 'nd'; 
  // } else if (lastDigit === 3) {
  //   endingString = 'rd';
  // } else {
  //   endingString = 'th';
  // }

  //optimized using object/map lookup
  const endings: Record<number, string> = {
    1: 'st',
    2: 'nd',
    3: 'rd'
  }

  //don't forget 11, 12, 13 to check first
  
  //multiple ternary
  // const newEndingString = [11, 12, 13].includes(lastTwoDigits) ? "th" : lastDigit === 1 ? endings[1]: lastDigit === 2 ? endings[2] : lastDigit === 3 ? endings[3] : 'th';

  //final 
  const endingString = [11, 12, 13].includes(lastTwoDigits) ? 'th' : (endings[lastDigit] ?? 'th');

  return `${name}, you are the ${number}${endingString} customer we serve today. Thank you!`
}
