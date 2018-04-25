it.does("#c> it.typeof.js: ........................................", function(){
  it.does("it.typeof", function(){
    it(undefined).typeof;
    it(null).typeof;
    it(false).typeof;
    it(true).typeof;
    it(123).typeof;
    it("hello").typeof;
    it(Symbol()).typeof;
    it({}).typeof;
    it([]).typeof;
    it(function(){}).typeof;
  });

  it.does("it.typeof.none", function(){
    it(undefined).typeof.none;
    it(null).typeof.none;
    it(false).typeof.none;
    it(true).typeof.none;
    it(123).typeof.none;
    it("hello").typeof.none;
    it(Symbol()).typeof.none;
    it({}).typeof.none;
    it([]).typeof.none;
    it(function(){}).typeof.none;
  });
});