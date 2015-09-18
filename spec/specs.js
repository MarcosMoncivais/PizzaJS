describe("Pizza", function(){
	it("creates a pizza with given specifications", function(){
		var testPizza = new Pizza("Medium", 1, 1);
    expect(testPizza.size).to.equal("Medium");
    expect(testPizza.toppings).to.equal(1);
    expect(testPizza.quantity).to.equal(1);
	});
	
	it("will price pizza according to size", function (){
		var testPizza = new Pizza("Small", 1, 1);
		expect(testPizza.price()).to.equal(14);
	});
	
	it("will check to see if user added toppings and adjust price accordingly", function(){
		var testPizza = new Pizza("Medium", 1, 2);
		expect(testPizza.price()).to.equal(26);
	});
	
	it("will price pizza according to quantity", function(){
		var testPizza = new Pizza("Small", 1, 3);
		expect(testPizza.price()).to.equal(30);
	});
});	

