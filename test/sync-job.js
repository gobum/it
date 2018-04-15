var x = 0;
var f = Object;

it("SSS", function(it){
  it("SSS.1", f);
  it("SSS.2", f);
  it("SSS.3", f);
  throw Error("SSS Error");
  it("SSS.4", f);  
});
