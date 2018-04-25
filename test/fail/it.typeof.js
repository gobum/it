it.does("#c> it.typeof.js: ........................................", function(){
  it.does("it.typeof.*", function(){
    it(undefined).typeof.object;
    it(null).typeof.undefined;
    it(false).typeof.object;
    it(true).typeof.number;
    it(123).typeof.boolean;
    it("hello").typeof.symbol;
    it(Symbol()).typeof.string;
    it({}).typeof.boolean;
    it([]).typeof.string;
    it(function(){}).typeof.object;
  });

  it.does("it.typeof(*)", function(){
    it(undefined).typeof("boolean");
    it(null).typeof("number");
    it(false).typeof("object");
    it(true).typeof("number");
    it(123).typeof("string");
    it("hello").typeof("number");
    it(Symbol()).typeof("boolean");
    it({}).typeof("function");
    it([]).typeof("function");
    it(function(){}).typeof("object");
  });
});