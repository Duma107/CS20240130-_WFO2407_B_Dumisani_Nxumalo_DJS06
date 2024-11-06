// Data
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '5' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '4' },
];

// Basic Exercises

// 1. ForEach Basics
console.log('Exercise 1: ForEach Basics');
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
console.log('\nExercise 2: Uppercase Transformation');
const upperProvinces = provinces.map(province => province.toUpperCase());
console.log(upperProvinces);

// 3. Name Lengths
console.log('\nExercise 3: Name Lengths');
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
console.log('\nExercise 4: Sorting');
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
console.log('\nExercise 5: Filtering Cape');
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Number of provinces without 'Cape': ${nonCapeProvinces.length}`);

// 6. Finding 'S'
console.log('\nExercise 6: Finding S');
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// 7. Creating Object Mapping
console.log('\nExercise 7: Object Mapping');
const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvinces);

// Advanced Exercises

// 1. Log Products
console.log('\nAdvanced Exercise 1: Log Products');
console.log(products.map(item => item.product).join(', '));

// 2. Filter by Name Length
console.log('\nAdvanced Exercise 2: Filter by Name Length');
console.log(
  products
    .filter(item => item.product.length <= 5)
    .map(item => item.product)
    .join(', ')
);

// 3. Price Manipulation
console.log('\nAdvanced Exercise 3: Price Manipulation');
console.log(
  products
    .filter(item => item.price !== '' && item.price !== ' ')
    .reduce((total, item) => total + Number(item.price), 0)
);

// 4. Concatenate Product Names
console.log('\nAdvanced Exercise 4: Concatenate Product Names');
console.log(
  products.reduce((string, item, index) => 
    index === 0 ? item.product : `${string}, ${item.product}`, '')
);

// 5. Find Extremes in Prices
console.log('\nAdvanced Exercise 5: Price Extremes');
console.log(
  products.reduce((result, item) => {
    const price = Number(item.price);
    if (!isNaN(price) && item.price !== '' && item.price !== ' ') {
      if (!result.highest || price > result.highest) result.highest = price;
      if (!result.lowest || price < result.lowest) result.lowest = price;
    }
    return result;
  }, { highest: null, lowest: null })
);console.log(result => `Highest: ${result.highest}. Lowest: ${result.lowest}`);

// 6. Object Transformation
console.log('\nAdvanced Exercise 6: Object Transformation');
console.log(
  products.reduce((acc, item) => {
    acc.push({
      name: item.product,
      cost: item.price
    });
    return acc;
  }, [])
);