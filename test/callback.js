"use strict";

it("Callback done:", function(done, fail){
  it.log("#sBefore callback.")
  it(true).ok;
  setTimeout(function(){
    done("hello world");
  }, 1000);
}).then(function(value){
  it.log("#sAfter callback.")
  it(value === "hello world").ok;
  it("Test job after callback:", function(){
    it("assert after callback");
  });
});

it("Callback fail:", function(done, fail){
  it.log("#sBefore callback.")
  it(true).ok;
  setTimeout(function(){
    fail(Error("timeout!"));
  }, 1000);
}).then(function(value){
  it.log("#sAfter callback.")
  it(value === "hello world").ok;
});

it("Callback done with timeout:", function(done, fail){
  it.log("#sBefore callback.")
  it(true).ok;
  setTimeout(function(){
    done("hello world");
  }, 0);
}).then(function(value){
  it.log("#sAfter callback.")
  it(value === "hello world").ok;
  it("Test job after callback:", function(){
    it("assert after callback").ok;
    it(false).ok;
  });
}).in(1000);

