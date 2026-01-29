export function decodedResistorValue(colors: string[]) {
  let colorNumber = '';
  let numberOfZeros = 0;

  colors.slice(0, 2).forEach((color) => {
    colorNumber += COLORS.indexOf(color).toString();
  });

  numberOfZeros = COLORS.indexOf(colors[2]);

  // 0 or 1 zeros: ohms
  // 2 or 3 zeros: kiloohms
  // 6 or 7 zeros: megaohms
  // 9 or 10 zeros: gigaohms

  let unit = 'ohms';

  if (numberOfZeros >= 2 && numberOfZeros <= 4) {
    unit = 'kiloohms';
    //reduce number of zeros by 3 to convert to kiloohms
    numberOfZeros -= 3;
  } else if (numberOfZeros >= 5 && numberOfZeros <= 6) {
    unit = 'megaohms';
    //reduce number of zeros by 6 to convert to megaohms
    numberOfZeros -= 6;
  } else if (numberOfZeros >= 7) {
    unit = 'gigaohms';
    //reduce number of zeros by 9 to convert to gigaohms
    numberOfZeros -= 9;
  }

  return `${parseInt(colorNumber) * Math.pow(10, numberOfZeros)} ${unit}`;
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]