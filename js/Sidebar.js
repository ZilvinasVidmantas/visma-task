class Sidebar {
  // HTML elements
  htmlElement;
  constructor(selector, addEvent) {
    this.addEvent = addEvent;
    this.htmlElement = document.querySelector(selector);
    this.initView();
  }

  initView = () => {
    this.htmlElement.className = 'side-view';

    this.formCreate = new FormCreate(this.addEvent);

    this.header = document.createElement('div');
    this.header.className = 'create-button';
    this.header.innerHTML = '<h1 class="create-view__header">+ Create Event</h1>';

    this.htmlElement.append(
      this.header,
      this.formCreate.htmlElement
    )
  }
}