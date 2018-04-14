it("Test by normal function:", function(it){
  it("Child test", async function(it){
    var child = await it.delay(10, "child")
    it(child === "child");
    throw Error("Error Child test");
  });

  it(true);
  it(!false);

  it("Child test", async function(it){
    var child = await it.delay(10, "child2")
    it(child === "child2");
  });

  it.sum();
});

it("Test by async function:", async function(it){
  var value = await it.delay(10, true);
  it(value);
  value = await it.delay(10, false);
  it(!value);
});

it.sum();