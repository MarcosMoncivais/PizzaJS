describe("find", function() {
	it('checks to see if two words match', function(){
		expect(find("poop", "poop")).to.equal(true)
	});
});

describe("findReplace", function () {
  it("will find all instances of a word in a string and replace it with another", function () {
    expect(findReplace("hi mom wsup", "mom", "dad")).to.equal("hi dad wsup");
  });

  it("replaces a word that occurs multiple times in a sentence", function () {
    expect(findReplace("i love love you", "love", "hate")).to.equal("i hate hate you");
  });
});