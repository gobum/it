it.does("#c> it.is.js: ........................................", function(){
  it.does("it(any).is", function(){
    it(true).is.ok;
    it(undefined).is.undefined;
    it(null).is.null;
    it(false).is.false;
    it(true).is.true;
    it(false).is.boolean;
    it(true).is.boolean;
    it(123).is.number;
    it("hello").is.string;
    it(Symbol()).is.symbol;
    it({}).is.object;
    it([]).is.object;
    it(function(){}).is.object;
    it(function(){}).is.function;


    it(undefined).is.typeof.undefined;
    it(null).is.typeof.object;
    it(false).is.type.of.boolean;
    it(true).is.type.of.boolean;
    it(123).is.type.of.number;
    it("hello").is.type.of.string;
    it(Symbol()).is.type.of.symbol;
    it({}).is.type.of.object;
    it([]).is.type.of.object;
    it(function(){}).is.typeof.function;

    it(undefined).is.type.of("undefined");
    it(null).is.type.of("object");
    it(false).is.type.of("boolean");
    it(true).is.type.of("boolean");
    it(123).is.type.of("number");
    it("hello").is.type.of("string");
    it(Symbol()).is.type.of("symbol");
    it({}).is.type.of("object");
    it([]).is.type.of("object");
    it(function(){}).is.type.of("function");

    it(new Boolean(false)).is.instance.of.Boolean;
    it(new Number(123)).is.instance.of.Number;
    it(new String("hello")).is.instance.of.String;
    it({}).is.instance.of.Object;
    it(function(){}).is.instance.of.Function;
    it([]).is.instance.of.Array;
    it(/abc/).is.instance.of.RegExp;
    it([]).is.instance.of(Array);
  });
});