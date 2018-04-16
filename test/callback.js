it("Callback done:", function(done, fail){
  it.log("#sBefore callback.")
  it(true);
  setTimeout(function(){
    done("hello world");
  }, 1000);
}).then(function(value){
  it.log("#sAfter callback.")
  it(value === "hello world");
  it("Test job after callback:", function(){
    it("assert after callback");
  });
});

it("Callback fail:", function(done, fail){
  it.log("#sBefore callback.")
  it(true);
  setTimeout(function(){
    fail(Error("timeout!"));
  }, 1000);
}).then(function(value){
  it.log("#sAfter callback.")
  it(value === "hello world");
});

