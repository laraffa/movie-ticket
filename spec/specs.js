describe('ticketPrice', function() {
  it('will create a new price with the following properties', function(){
  var testPrice = new TicketPrice("12:00", "adult", "Lion King");
  expect(testPrice.times).to.equal("12:00");
  expect(testPrice.age).to.equal("adult");
  expect(testPrice.movie).to.equal("Lion King");
  });


  it("will show an $8 ticket price for adults seeing a matinee", function(){
  var testPrice = new TicketPrice("12:00", "adult", "Lion King");
  expect(testPrice.price()).to.equal(8);
  });

  it("will show a $10 ticket price for adults seeing an evening show", function(){
    var testPrice = new TicketPrice("5:00", "adult", "Lion King");
    expect(testPrice.price()).to.equal(10);
  });

  it ("will show $5 ticket for seniors seeing a matinee show", function(){
    var testPrice = new TicketPrice("12:00", "senior", "Lion King");
      expect(testPrice.price()).to.equal(5);
  });

  it("will show $8 ticket for seniors seeing an evening show", function(){
    var testPrice = new TicketPrice("5:00", "senior", "Lion King");
    expect(testPrice.price()).to.equal(8);

  });

});
