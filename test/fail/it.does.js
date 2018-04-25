it.does("#c> it.does.js: ........................................", function(){
  it.does("It does the job:", function(){
    it.does("It does the job1:", function(){
      it(!"job1");
    });
    it.does("It does the job2:", function(){
      it(!"job2");
    });
  });
});
