import run from "aocrunner";

const parseInput = (rawInput) => {
  return rawInput.split("\n");
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let elves = [];
  for (let index = 0; index < input.length; index++) {
    let singleElf = [];
    let i = index;
    while (Boolean(input[i])) {
      singleElf.push(parseInt(input[i], 10));

      i++;
    }
    index = i;
    let sum = 0;
    for (let j = 0; j < singleElf.length; j++) {
      sum += singleElf[j];
    }
    elves.push(sum);
  }
  return Math.max(...elves);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let elves = [];
  for (let index = 0; index < input.length; index++) {
    let singleElf = [];
    let i = index;
    while (Boolean(input[i])) {
      singleElf.push(parseInt(input[i], 10));

      i++;
    }
    index = i;
    let sum = 0;
    for (let j = 0; j < singleElf.length; j++) {
      sum += singleElf[j];
    }
    elves.push(sum);
  }
  const sortedElves = elves.sort((a, b) => b - a).slice(0, 3);
  return sortedElves[0] + sortedElves[1] + sortedElves[2];
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
