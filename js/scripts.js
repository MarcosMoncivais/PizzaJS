//check to see if word shows in user input form get-go
var find = function (wordOne, wordTwo) {
	if (wordOne === wordTwo) {
		return true;
} else {
	return false;
	}
};

//OMG JUST GOT THIS PASSING
	var findReplace = function(sentence, wordFind, wordReplace) {
	var UserInput = sentence.split(" ");
	for (var i = 0; i < UserInput.length; i++) {
		if (UserInput[i] === wordFind) {
	  		UserInput[i] = wordReplace;
		}
	}
	var resultString = UserInput.join(" ");
  //check if changes were made
  if (resultString === sentence) {
    return "nope!";
  } else {
    return resultString;
  }
};

$(document).ready(function(){
  $("form#findReplace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var wordFind = $("input#wordFind").val();
    var wordReplace = $("input#wordReplace").val();
    
    var newSentence = findReplace(sentence, wordFind, wordReplace);
    
    $(".resultString").show();
    event.preventDefault();
  });

});
