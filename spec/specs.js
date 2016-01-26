describe('ticketPrice', function() {
  it('will create a new price with the following properties', function(){
    var testPrice = new ticketPrice("time", "age");
    expect(testPrice.times).to.eql([]);
    expect(testPrice.age).to.equal("adult");
  });
  it("adds the age method to the ticket", function() {
    var testAge = new Age ("adult", "senior");
    expect(testAge.age()).to.equal("adult");
  });
});
