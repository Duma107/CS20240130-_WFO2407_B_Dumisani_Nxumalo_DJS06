import { products } from '../data/index.js';

export const advancedExercises = {
  // Exercise 1: Log Products
  getProducts: () => products.map(item => item.product).join(', '),

  // Exercise 2: Filter by Name Length
  filterByLength: () => products
    .filter(item => item.product.length <= 5)
    .map(item => item.product)
    .join(', '),

  // Exercise 3: Price Manipulation
  calculateTotal: () => products
    .filter(item => item.price !== '' && item.price !== ' ')
    .reduce((total, item) => total + Number(item.price), 0),

  // Exercise 4: Concatenate Product Names
  concatenateNames: () => products.reduce((string, item, index) => 
    index === 0 ? item.product : `${string}, ${item.product}`, ''),

  // Exercise 5: Find Extremes in Prices
  findExtremes: () => products.reduce((result, item) => {
    const price = Number(item.price);
    if (!isNaN(price) && item.price !== '' && item.price !== ' ') {
      if (!result.highest || price > result.highest) result.highest = price;
      if (!result.lowest || price < result.lowest) result.lowest = price;
    }
    return result;
  }, { highest: null, lowest: null }),

  // Exercise 6: Object Transformation
  transformObjects: () => products.map(item => ({
    name: item.product,
    cost: item.price
  }))
};