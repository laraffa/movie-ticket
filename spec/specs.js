describe("Age", function(){
  it("returns a price based on the given properties", function() {
    var agePrice = new Age("40");
    expect(agePrice.under65).to.equal("$10");
    expect(agePrice.over65).to.equal("$8");
  });
});
