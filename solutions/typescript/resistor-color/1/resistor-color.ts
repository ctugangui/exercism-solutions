const COLORS = [
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
] as const
export const colorCode = (color: string) => {
  const colorMap: Record<string, number> = Object.fromEntries(
    COLORS.map((color, index) => [color, index])
  );
  return colorMap[color];
}

export { COLORS }
