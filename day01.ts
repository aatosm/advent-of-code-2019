import * as fs from 'fs';

const inputStrings = fs.readFileSync('./inputs/day01.txt').toString().split('\n');
const input = inputStrings.map((i: string) => parseInt(i));

const countFuel = (mass: number): number => {
  return Math.floor(mass / 3) - 2;
};

const countFuelRecursive = (mass: number): number => {
  const fuel = countFuel(mass);
  return fuel <= 0 ? 0 : fuel + countFuelRecursive(fuel);
}

const resultPartOne = input.reduce((counter: number, current: number) =>
  counter + countFuel(current), 0);

const resultPartTwo = input.reduce((counter: number, current: number) =>
  counter + countFuelRecursive(current), 0);

console.log(resultPartOne);
console.log(resultPartTwo);
