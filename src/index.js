import { basicExercises } from './exercises/basic.js';
import { advancedExercises } from './exercises/advanced.js';
import { testExercise } from './utils/test.js';

// Run Basic Exercises
console.log('\n=== Basic Exercises ===\n');
testExercise(1, () => {
  basicExercises.logNames();
  basicExercises.logProvinces();
  basicExercises.logPairs();
  return 'ForEach operations completed';
});

testExercise(2, basicExercises.upperProvinces);
testExercise(3, basicExercises.nameLengths);
testExercise(4, basicExercises.sortedProvinces);
testExercise(5, basicExercises.filterCape);
testExercise(6, basicExercises.findS);
testExercise(7, basicExercises.createMapping);

// Run Advanced Exercises
console.log('\n=== Advanced Exercises ===\n');
testExercise('A1', advancedExercises.getProducts);
testExercise('A2', advancedExercises.filterByLength);
testExercise('A3', advancedExercises.calculateTotal);
testExercise('A4', advancedExercises.concatenateNames);
testExercise('A5', advancedExercises.findExtremes);
testExercise('A6', advancedExercises.transformObjects);