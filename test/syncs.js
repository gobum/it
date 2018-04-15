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
