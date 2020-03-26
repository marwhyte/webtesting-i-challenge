const enhancer = require("./enhancer.js");
// test away!

describe("enhancer repair function", () => {
  describe("repair function", () => {
    it("only accepts an item object", () => {
      const emptyObject = {};
      expect(() => {
        enhancer.repair(emptyObject);
      }).toThrow();
    });
    it("returns an item object with 100 durability", () => {
      const item = {
        name: "Item",
        durability: 20,
        enhancement: 0
      };
      expect(enhancer.repair(item).durability).toBe(100);
    });
  });
  describe("success function", () => {
    it("Only works with item object", () => {
      const emptyObject = {};
      expect(() => {
        enhancer.succeed(emptyObject);
      }).toThrow();
    });
    it("item's enhancement + 1", () => {
      const item = {
        name: "Item",
        durability: 10,
        enhancement: 0
      };
      expect(enhancer.succeed(item).enhancement).toBe(1);
    });
    it("Item enhancement capped at 20", () => {
      const item = {
        name: "Item",
        durability: 5,
        enhancement: 20
      };
      expect(enhancer.succeed(item).enhancement).toBe(20);
    });
    it("won't change the item's durability", () => {
      const item = {
        name: "Item",
        durability: 5,
        enhancement: 20
      };
      expect(enhancer.succeed(item).durability).toBe(5);
    });
  });
  describe("fail function", () => {
    it("only accepts an item object", () => {
      const emptyObject = {};
      expect(() => {
        enhancer.fail(emptyObject);
      }).toThrow();
    });
    it("if enhancement level is < 15 durability - 5", () => {
      const item = {
        name: "Item",
        durability: 40,
        enhancement: 10
      };
      expect(enhancer.fail(item).durability).toBe(35);
    });
    it("if enhancement level is > 15 durability - 10", () => {
      const item = {
        name: "Item",
        durability: 50,
        enhancement: 20
      };
      expect(enhancer.fail(item).durability).toBe(40);
    });
    it("if enhancement level is > 16 enhancement - 1", () => {
      const item = {
        name: "Item",
        durability: 50,
        enhancement: 20
      };
      expect(enhancer.fail(item).enhancement).toBe(19);
    });
  });
});
