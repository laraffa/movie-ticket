function TicketPrice(times, age, movie) {
  this.times = times;
  this.age = age;
  this.movie = movie;
}

TicketPrice.prototype.price = function() {
  if((this.age === "adult") && (this.times === "12:00")) {
    return 8;
  }


else if ((this.age === "adult") && (this.times === "5:00")) {
  return 10;
}
}
