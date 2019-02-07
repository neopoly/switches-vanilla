import App from "app"
import { assert } from "chai"

describe("App", () => {
  let container

  beforeEach("prepare container", () => {
    container = document.createElement("div")
  })

  afterEach("remove container", () => {
    container.remove()
  })

  it("Display headline", () => {
    const app = new App(container)
    app.init()
    assert.strictEqual(container.firstElementChild.textContent, "Insert Switches here.")
  })
})
