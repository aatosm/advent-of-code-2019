import * as fs from 'fs';

const inputStrings = fs.readFileSync('./inputs/day02.txt').toString().split(',');
const input = inputStrings.map((i: string) => parseInt(i));

const partOne = () => {
  for (let i = 0; i < input.length; i+=4) {
    if (input[i] === 1) {
      input[input[i+3]] = input[input[i+1]] + input[input[i+2]];
    }
    else if (input[i] === 2) {
      input[input[i+3]] = input[input[i+1]] * input[input[i+2]];
    }
    else if (input[i] === 99) {
      break;
    } else {
      console.log('Error. Something went wrong!');
      break;
    }
  }
  console.log(input[0]);
}

partOne();
