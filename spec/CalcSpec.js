

describe("The specifications for calculator", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });

  it("should have a multiply function", function() {
    expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(3, 4)).toBe(12);
  });

  it("should have a divide function", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(4, 2)).toBe(2);
  });

  it("should have a square function", function() {
    expect(square).toBeDefined();
  });

  it("should square one integer", function() {
    expect(square(3)).toBe(9);
  });

  it("should have a square root function", function() {
    expect(squareRoot).toBeDefined();
  });

  it("should take the square root of one integer", function() {
    expect(squareRoot(9)).toBe(3);
  })

});












