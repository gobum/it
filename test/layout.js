var t = 100;

it("SSS", function(it){
  it("SSS.1", function(it){
    it("SSS.1.1", function(it){
      it("sss.1.1.1");
      it("sss.1.1.2");
      it("sss.1.1.3");
    });
    it("SSS.1.2", function(it){
      it("sss.1.2.1");
      it("sss.1.2.2");
      it("sss.1.2.3");
      throw Error("SSS.1.2");
      it("sss.1.2.4");
    });
    it("SSS.1.3", function(it){
      it("sss.1.3.1");
      it("sss.1.3.2");
      it("sss.1.3.3");
    });
  });
  it("SSS.2", function(it){
    it("SSS.2.1", function(it){
      it("sss.2.1.1");
      it("sss.2.1.2");
      it("sss.2.1.3");
    });
    it("SSS.2.2", function(it){
      it("sss.2.2.1");
      it("sss.2.2.2");
      it("sss.2.2.3");
      throw Error("SSS.2.2");
      it("sss.2.2.4");
    });
    it("SSS.2.3", function(it){
      it("sss.2.3.1");
      it("sss.2.3.2");
      it("sss.2.3.3");
    });
  });
  it("SSS.3", function(it){
    it("SSS.3.1", function(it){
      it("sss.3.1.1");
      it("sss.3.1.2");
      it("sss.3.1.3");
    });
    it("SSS.3.2", function(it){
      it("sss.3.2.1");
      it("sss.3.2.2");
      it("sss.3.2.3");
      throw Error("SSS.3.2");
      it("sss.3.2.4");
    });
    it("SSS.3.3", function(it){
      it("sss.3.3.1");
      it("sss.3.3.2");
      it("sss.3.3.3");
    });
  });
});

it("AAA", async function(it){
  await it.delay(t);
  it("AAA.1", async function(it){
    await it.delay(t);
    it("AAA.1.1", async function(it){
      await it.delay(t);
      it("aaa.1.1.1");
      await it.delay(t);
      it("aaa.1.1.2");
      await it.delay(t);
      await it.delay(t);
      it("aaa.1.1.3");
    });
    await it.delay(t);
    it("AAA.1.2", async function(it){
      await it.delay(t);
      it("aaa.1.2.1");
      await it.delay(t);
      it("aaa.1.2.2");
      await it.delay(t);
      it("aaa.1.2.3");
      await it.delay(t);
      throw Error("SSS.1.2");
      await it.delay(t);
      it("sss.1.2.4");
    });
    await it.delay(t);
    it("AAA.1.3", async function(it){
      await it.delay(t);
      it("aaa.1.3.1");
      await it.delay(t);
      it("aaa.1.3.2");
      await it.delay(t);
      it("aaa.1.3.3");
    });
  });
  await it.delay(t);
  it("AAA.2", async function(it){
    await it.delay(t);
    it("AAA.2.1", async function(it){
      await it.delay(t);
      it("aaa.2.1.1");
      await it.delay(t);
      it("aaa.2.1.2");
      await it.delay(t);
      it("aaa.2.1.3");
    });
    await it.delay(t);
    it("AAA.2.2", async function(it){
      await it.delay(t);
      it("aaa.2.2.1");
      await it.delay(t);
      it("aaa.2.2.2");
      await it.delay(t);
      it("aaa.2.2.3");
      await it.delay(t);
      throw Error("SSS.2.2");
      await it.delay(t);
      it("sss.2.2.4");
    });
    await it.delay(t);
    it("AAA.2.3", async function(it){
      await it.delay(t);
      it("aaa.2.3.1");
      await it.delay(t);
      it("aaa.2.3.2");
      await it.delay(t);
      it("aaa.2.3.3");
    });
  });
  await it.delay(t);
  it("AAA.3", async function(it){
    await it.delay(t);
    it("AAA.3.1", async function(it){
      await it.delay(t);
      it("aaa.3.1.1");
      await it.delay(t);
      it("aaa.3.1.2");
      await it.delay(t);
      it("aaa.3.1.3");
    });
    it("AAA.3.2", async function(it){
      await it.delay(t);
      it("aaa.3.2.1");
      await it.delay(t);
      it("aaa.3.2.2");
      await it.delay(t);
      it("aaa.3.2.3");
      await it.delay(t);
      throw Error("SSS.3.2");
      await it.delay(t);
      it("sss.3.2.4");
    });
    await it.delay(t);
    it("AAA.3.3", async function(it){
      await it.delay(t);
      it("aaa.3.3.1");
      await it.delay(t);
      it("aaa.3.3.2");
      await it.delay(t);
      it("aaa.3.3.3");
    });
  });
});
