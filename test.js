it("Test by normal function:", function(it){
  it("Child test", async function(it){
    var child = await it.delay(1000, "child")
    it(child === "child");
  });

  it(true);
  it(!false);

  it("Child test", async function(it){
    var child = await it.delay(1000, "child2")
    it(child === "child2");
  });
});

it("Test by async function:", async function(value){
  value = await it.delay(1000, true);
  it(value);
  value = await it.delay(1000, false);
  it(!value);
});