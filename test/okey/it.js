it.does("#c> it.js: ........................................", function(){
  it.does("it()", function(){
    it(true);
    it("call func", function(){});
    it(true).unknown_prop;
  });
});