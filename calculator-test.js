
it('should calculate the monthly rate correctly', function () {
  expect(calculatePayment(10000,8,5.8)).toEqual('130.44');

});

it('should calculate the monthly rate correctly', function () {
  expect(calculatePayment(10043,8,5.8)).toEqual('131.00');

});

it("should return a result with 2 decimal places", function() {
  const values = { 
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});
