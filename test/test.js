const test = require("node:test")
const assert = require("assert")
const main = require("../main")

test("it should return the env variable",()=>{
   assert.strictEqual(main().DB_NAME,"my_database")
})

test("it should skip comments",()=>{
   assert.strictEqual(main().APP_ENV,"development")
})

test("it should get boolean value",()=>{
   assert.strictEqual(main().DEBUG_MODE,true)
})

test("it should get a number",()=>{
   assert.strictEqual(main().INTERVAL,10)
})