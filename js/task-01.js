const categoryAmount = document.querySelectorAll(".item");
console.log("Number of categories:", categoryAmount.length);

categoryAmount.forEach((category) => {
  const categoryName = category.querySelector("h2");
  console.log("\nCategory:", categoryName.textContent);

  const categoryCount = category.querySelectorAll("li");
  console.log("Elements:", categoryCount.length);
});
