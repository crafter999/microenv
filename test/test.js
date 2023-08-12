const test = require("node:test")
const assert = require("assert")
const main = require("../main")

test("1",()=>{
   assert.strictEqual(main().test1,"hello world")
})

test("2",()=>{
   assert.strictEqual(main().test2,"hello world")
})