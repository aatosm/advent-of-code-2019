import * as fs from 'fs';

const countFuel = (mass: number): number => {
  return Math.floor(mass / 3) - 2;
};

const countFuelRecursive = (mass: number): number => {
  const fuel = Math.floor(mass / 3) - 2;
  return fuel <= 0 ? 0 : fuel + countFuelRecursive(fuel);
}

const inputStrings = fs.readFileSync('./inputs/day1.txt').toString().split('\n');
const input = inputStrings.map((i: string) => parseInt(i));

const resultPartOne = input.reduce((counter: number, current: number) =>
counter + countFuel(current), 0);

const resultPartTwo = input.reduce((counter: number, current: number) =>
counter + countFuelRecursive(current), 0);

console.log(resultPartOne);
console.log(resultPartTwo);
