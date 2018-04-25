it.does("#c> it.typeof.js: ........................................", function(){
  it.does("it.typeof.*", function(){
    it().typeof.undefined;
    it(undefined).typeof.undefined;
    it(null).typeof.object;
    it(false).typeof.boolean;
    it(true).typeof.boolean;
    it(123).typeof.number;
    it("hello").typeof.string;
    it(Symbol()).typeof.symbol;
    it({}).typeof.object;
    it([]).typeof.object;
    it(function(){}).typeof.function;
  });

  it.does("it.typeof(*)", function(){
    it().typeof("undefined");
    it(undefined).typeof("undefined");
    it(null).typeof("object");
    it(false).typeof("boolean");
    it(true).typeof("boolean");
    it(123).typeof("number");
    it("hello").typeof("string");
    it(Symbol()).typeof("symbol");
    it({}).typeof("object");
    it([]).typeof("object");
    it(function(){}).typeof("function");
  });
});