// Test utility function
const testExercise = (exerciseNumber, testFunction) => {
    console.log(`\n=== Testing Exercise ${exerciseNumber} ===`);
    try {
        const result = testFunction();
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
    console.log('='.repeat(30));
};

// Example usage for each exercise:
testExercise(1, () => {
    console.log('Names:');
    names.forEach(name => console.log(name));
    console.log('\nProvinces:');
    provinces.forEach(province => console.log(province));
    console.log('\nPairs:');
    names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
    return 'ForEach operations completed';
});

testExercise(2, () => {
    return provinces.map(province => province.toUpperCase());
});

testExercise(3, () => {
    return names.map(name => name.length);
});

// Add test cases for remaining exercises...

// Test all advanced exercises
const testAdvanced = () => {
    console.log('\n=== Testing Advanced Exercises ===');
    
    // Test product names
    console.log('Products:', products.map(item => item.product).join(', '));
    
    // Test price calculation
    const validPrices = products
        .filter(item => item.price !== '' && item.price !== ' ')
        .reduce((total, item) => total + Number(item.price), 0);
    console.log('Total valid prices:', validPrices);
    
    // Test name concatenation
    console.log('Concatenated names:', 
        products.reduce((str, item, i) => 
            i === 0 ? item.product : `${str}, ${item.product}`, ''));
};