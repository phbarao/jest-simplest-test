const { TestWatcher } = require("jest");

const product = require("./product");

test("multiplicates 2 * 6 to equal 12", () => {
  expect(product(2, 6)).toBe(12);
});

test("multiplicates 20 * 10 to equal 200", () => {
  expect(product(20, 10)).toBe(200);
});
