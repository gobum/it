"use strict";

var t = 1;
it("g1", function* () {
  it("g1.g1", function* () {
    it("g1.g1.g1", function* () {
      it(yield it.delay(t, "1.1.1.1")).ok;
      it(yield it.delay(t, "1.1.1.2")).ok;
      it(yield it.delay(t, "1.1.1.3")).ok;
      throw Error("Error in g1.g1.g1")
      it(yield it.delay(t, "1.1.1.4")).ok;
    });
    it("g1.g1.g2", function* () {
      it(yield it.delay(t, "1.1.2.1")).ok;
      it(yield it.delay(t, "1.1.2.2")).ok;
      it(yield it.delay(t, "1.1.2.3")).ok;
      throw Error("Error in g1.g1.g2")
      it(yield it.delay(t, "1.1.2.4")).ok;
    });
    it("g1.g1.g3", function* () {
      it(yield it.delay(t, "1.1.3.1")).ok;
      it(yield it.delay(t, "1.1.3.2")).ok;
      it(yield it.delay(t, "1.1.3.3")).ok;
      throw Error("Error in g1.g1.g3")
      it(yield it.delay(t, "1.1.3.4")).ok;
    });
  });
  it("g1.g2", function* () {
    it("g1.g2.g1", function* () {
      it(yield it.delay(t, "1.2.1.1")).ok;
      it(yield it.delay(t, "1.2.1.2")).ok;
      it(yield it.delay(t, "1.2.1.3")).ok;
      throw Error("Error in g1.g2.g1")
      it(yield it.delay(t, "1.2.1.4")).ok;
    });
    it("g1.g2.g2", function* () {
      it(yield it.delay(t, "1.2.2.1")).ok;
      it(yield it.delay(t, "1.2.2.2")).ok;
      it(yield it.delay(t, "1.2.2.3")).ok;
      throw Error("Error in g1.g2.g2")
      it(yield it.delay(t, "1.2.2.4")).ok;
    });
    it("g1.g2.g3", function* () {
      it(yield it.delay(t, "1.2.3.1")).ok;
      it(yield it.delay(t, "1.2.3.2")).ok;
      it(yield it.delay(t, "1.2.3.3")).ok;
      throw Error("Error in g1.g2.g3")
      it(yield it.delay(t, "1.2.3.4")).ok;
    });
  });
  it("g1.g3", function* () {
    it("g1.g3.g1", function* () {
      it(yield it.delay(t, "1.3.1.1")).ok;
      it(yield it.delay(t, "1.3.1.2")).ok;
      it(yield it.delay(t, "1.3.1.3")).ok;
      throw Error("Error in g1.g3.g1")
      it(yield it.delay(t, "1.3.1.4")).ok;
    });
    it("g1.g3.g2", function* () {
      it(yield it.delay(t, "1.3.2.1")).ok;
      it(yield it.delay(t, "1.3.2.2")).ok;
      it(yield it.delay(t, "1.3.2.3")).ok;
      throw Error("Error in g1.g3.g2")
      it(yield it.delay(t, "1.3.2.4")).ok;
    });
    it("g1.g3.g3", function* () {
      it(yield it.delay(t, "1.3.3.1")).ok;
      it(yield it.delay(t, "1.3.3.2")).ok;
      it(yield it.delay(t, "1.3.3.3")).ok;
      throw Error("Error in g1.g3.g3")
      it(yield it.delay(t, "1.3.3.4")).ok;
    });
  });
});
