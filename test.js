var t = 100;

it("SSS", function(it){
  it("SSS.1", function(it){
    // it("sss.1.1");

    it("SSS.1.1", function(it){
      it("sss.1.1.1");
    });

    it("SSS.1.2", function(it){
      it("sss.1.2.1");
    });

    throw Error("SSS.1.1");
  });

  it("AAA.2", async function(it){
    await it.delay(t);
    it("aaa.2.1");
  });
  it.sum();
});

it("AAA", async function(it){
  await it.delay(t);
  it("aaa.1");
  await it.delay(t);
  it("aaa.2");
});

it.sum();