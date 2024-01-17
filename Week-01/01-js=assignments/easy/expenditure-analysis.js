/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];

  transactions.forEach(transaction => {
    // Check if the category is already in the result array
    const categoryIndex = result.findIndex(item => item.category === transaction.category);

    // If the category is found, update the totalSpent
    if (categoryIndex !== -1) {
      result[categoryIndex].totalSpent += transaction.price;
    } else {
      // If the category is not found, add a new object to the result array
      result.push({
        category: transaction.category,
        totalSpent: transaction.price
      });
    }
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
