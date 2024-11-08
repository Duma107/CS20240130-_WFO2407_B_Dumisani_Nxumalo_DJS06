export const testExercise = (exerciseNumber, testFunction) => {
  console.log(`\n=== Testing Exercise ${exerciseNumber} ===`);
  try {
    const result = testFunction();
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
  console.log('='.repeat(30));
};