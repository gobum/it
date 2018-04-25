it.do("#c> describe.js: ........................................", function(){
  describe("Describe the job:", function () {
    describe("Describe the job1:", function () {
      throw Error("job1 error");
    });
    describe("Describe the job2:", function () {
      throw Error("job2 error");
    });
  });
});
