# Project README

## Project Overview
This project implements exercises to demonstrate the use of JavaScript higher-order functions for data manipulation and processing. Each exercise includes well-organized and commented solutions using functions like `forEach`, `map`, `filter`, and `reduce`. The goal is to provide declarative, efficient, and readable code that follows best practices, such as using pure functions, avoiding side effects, and ensuring data immutability where appropriate.

## Features

### Basic Exercises
- **Iterating and Logging:** Utilizes `forEach` to iterate over arrays and log output.
- **Transformations with Map:** Applies `map` to transform array elements.
- **Filtering Data:** Uses `filter` to remove unwanted items based on conditions.
- **Creating Boolean Arrays:** Uses `map` and `includes` to generate arrays with Boolean values.
- **Object Mapping with Reduce:** Implements `reduce` to create mappings and aggregated data.

### Advanced Exercises
- **Method Chaining:** Combines multiple array methods for complex data manipulation.
- **Edge Case Handling:** Properly processes cases with empty or whitespace-only values.
- **Efficient Calculation:** Converts and calculates data as needed using `reduce`.
- **Data Immutability:** Maintains data integrity by avoiding direct mutations.
- **Error Handling:** Ensures proper error management and data validation.

Each function follows a declarative programming style for readability and efficiency. The code avoids side effects and prioritizes clear error handling, making it robust and easy to test.

## Project Setup

### Prerequisites
To use this project, you’ll need:
- A web browser with developer console access, or
- Node.js installed to run JavaScript in a terminal.

### Installation
1. Clone or download this project to your local machine.
2. Create three files for organizing the project:
   - `index.html` (for browser testing)
   - `scripts.js` (main code)
   - `test-functions.js` (testing utilities)

### File Structure
- **`index.html`**: Use this file to load and test the code in the browser console.
- **`scripts.js`**: This file contains the main logic for each exercise.
- **`test-functions.js`**: Optional helper file with reusable testing functions to simplify testing specific parts of the project.

## Usage Instructions

### Option 1: Testing in the Browser Console
1. Open `index.html` in your preferred web browser.
2. Open the developer console (F12 or right-click → Inspect → Console).
3. Copy the code from `scripts.js` and paste it into the console, or load it directly in `index.html`.
4. Run individual exercises or entire sections, using functions provided in `test-functions.js`.

### Option 2: Testing with Node.js
1. Ensure `Node.js` is installed on your system.
2. Open a terminal in the project directory.
3. Run the main script with:
   ```bash
   node scripts.js
   ```

## Testing Exercises

### Basic Tests
Each exercise’s expected outputs are documented. Examples include:

```javascript
// Iterating Names with forEach
names.forEach(name => console.log(name));
// Expected Output:
// Ashwin
// Sibongile
// Jan-Hendrik
// Sifso
// Shailen
// Frikkie

// Logging Name-Province Pairs
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
// Expected Output:
// Ashwin (Western Cape)
// Sibongile (Gauteng)
// etc.
```

### Transformation Tests
```javascript
console.log(provinces.map(province => province.toUpperCase()));
// Expected Output: ['WESTERN CAPE', 'GAUTENG', 'NORTHERN CAPE', ...]
```

### Product Price Calculation
```javascript
const totalPrice = products
    .filter(item => item.price !== '4' && item.price !== '7')
    .reduce((total, item) => total + Number(item.price), 0);
console.log(totalPrice);
// Expected Output: Sum of valid prices
```

### Testing Utilities
Use `test-functions.js` to test individual exercises or the entire project.

```javascript
// Run a specific test
testExercise(1, () => { /* code for testing */ });

// Or test all advanced exercises
testAdvanced();
```

## Expected Outputs
The console will log results for each exercise, which you can compare against the expected outputs. Error handling is included to help identify and resolve any issues during testing.

### Tips for Effective Testing
1. Run individual exercises to verify expected behavior.
2. Modify input data to test edge cases.
3. Use console filtering to manage output visibility.
4. Clear the console frequently to maintain clarity.

## Additional Support
If you need further assistance with any exercise, feel free to reach out for explanations or alternative solutions for specific exercises.

Happy coding!