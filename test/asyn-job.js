var x = 0;
var f = Object;

it("SSS", async function(it){
  await it("SSS.1", f);
  await it("SSS.2", f);
  await it("SSS.3", f);
  throw Error("SSS Error");
  await it("SSS.4", f);  
});
