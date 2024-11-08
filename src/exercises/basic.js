import { provinces, names } from '../data/index.js';

export const basicExercises = {
  // Exercise 1: ForEach Basics
  logNames: () => names.forEach(name => console.log(name)),
  logProvinces: () => provinces.forEach(province => console.log(province)),
  logPairs: () => names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)),

  // Exercise 2: Uppercase Transformation
  upperProvinces: () => provinces.map(province => province.toUpperCase()),

  // Exercise 3: Name Lengths
  nameLengths: () => names.map(name => name.length),

  // Exercise 4: Sorting
  sortedProvinces: () => [...provinces].sort(),

  // Exercise 5: Filtering Cape
  filterCape: () => provinces.filter(province => !province.includes('Cape')),

  // Exercise 6: Finding 'S'
  findS: () => names.map(name => name.toLowerCase().includes('s')),

  // Exercise 7: Creating Object Mapping
  createMapping: () => names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {})
};