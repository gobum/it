it.does("#c> it.does.js: ........................................", function(){
  it.does("It does the job:", function(){
    it.does("It does the job1:", function(){
      throw Error("job1 error");
    });
    it.does("It does the job2:", function(){
      throw Error("job2 error");
    });
  });
});
