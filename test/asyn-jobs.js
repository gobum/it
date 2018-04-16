var t = 100;

it("SSS", async function(){
  it("SSS.1", async function(){
    it("SSS.1.1", async function(){
      await it.delay(t);
      it("sss.1.1.1");
      it("sss.1.1.2");
      it("sss.1.1.3");
    });
    await it("SSS.1.2", async function(){
      await it.delay(t);
      it("sss.1.2.1");
      it("sss.1.2.2");
      it("sss.1.2.3");
      throw Error("SSS.1.2");
      it("sss.1.2.4");
    });
    await it("SSS.1.3", async function(){
      await it.delay(t);
      it("sss.1.3.1");
      it("sss.1.3.2");
      it("sss.1.3.3");
    });
  });
  it("SSS.2", async function(){
    await it("SSS.2.1", async function(){
      await it.delay(t);
    });
    it("SSS.2.2", async function(){
      await it.delay(t);
    });
    await it("SSS.2.3", async function(){
      await it.delay(t);
    });
  });
  await it("SSS.3", async function(){
    await it("SSS.3.1", async function(){
      await it.delay(t);
    });
    await it("SSS.3.2", async function(){
    });
    await it("SSS.3.3", async function(){
      await it.delay(t);
      it.log("#sHello world!");
    });
  });
});
