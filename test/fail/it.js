it.does("#c> it.js: ........................................", function(){
  it.does("it()", function(){
    it(false);
    it("call func", function(){throw Error("error")});
    it(false).unknown_prop;
  });
});