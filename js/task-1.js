const listOfCategories = document.querySelector('#categories');
const itemOfCategories = listOfCategories.querySelectorAll('.item');

console.log(`Number of categories: ${itemOfCategories.length}`);

itemOfCategories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
