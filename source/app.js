export default class App {
  constructor(element) {
    this._element = element
  }

  init() {
    this._element.innerHTML = `<h1 class="sample">Insert Switches here.</h1>`
  }
}
