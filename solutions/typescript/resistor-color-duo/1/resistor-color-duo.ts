export function decodedValue(colors: string[]): number {
  let colorNumber = '';
  let count = 0;
  //add indexes for the colors
  colors.forEach(color => {
    if (count >= 2) return;
    colorNumber += COLORS.indexOf(color).toString();
    count++;
  });
  return Number(colorNumber);
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
