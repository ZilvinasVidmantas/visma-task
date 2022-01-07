class FormCreate {
  // HMTL elements
  htmlElement;

  constructor(addEvent) {
    this.addEvent = addEvent;
    this.htmlElement = document.createElement('form');
    this.initView();
    this.htmlElement.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const mockData = 'duomenys';
    const errors = {};
    if (errors === null) {
      this.addEvent(mockData);
    } else {
      alert('yra klaidų');
    }
  }

  initView = () => {
    this.htmlElement.className = 'create-view';
    this.htmlElement.innerHTML = `
    <div class="create-view__grid">
      <div class="form-group grid-x-s-1 grid-x-e-3">
        <label for="title" class="form-group__label">Title</label>
        <input type="text" class="form-group__input" name="title" id="title">
      </div>
      <div class="form-group  grid-x-s-1 grid-x-e-3">
        <label for="description" class="form-group__label">Description</label>
        <input type="text" class="form-group__input" name="description" id="description">
      </div>
      <div class="form-group">
        <label for="date" class="form-group__label">Date</label>
        <input type="date" class="form-group__input" name="date" id="date">
      </div>
      <div class="form-group">
        <label for="type" class="form-group__label">Type</label>
        <select class="form-group__input" name="type" id="type">
          <option value="" selected disabled>-- select stype</option>
          <option value="MEETING">Meeting</option>
          <option value="CALL">Call</option>
          <option value="OUT">Out of Office</option>
        </select>
      </div>
      <div class="form-group">
        <label for="startTime" class="form-group__label">Start Time</label>
        <input type="time" class="form-group__input" name="startTime" id="startTime">
      </div>
      <div class="form-group">
        <label for="endTime" class="form-group__label">End Time</label>
        <input type="time" class="form-group__input" name="endTime" id="endTime">
      </div>
    </div>
    <div class="text-center mt-3">
      <button class="btn" type="submit">Create Event</button>
    </div>`;
    const { fields, errors, fieldContainers } = Array
      .from(this.htmlElement.querySelectorAll('[name]'))
      .reduce((result, field) => {
        result.fields[field.name] = field;
        result.errors[field.name] = null;
        result.fieldContainers[field.name] = field.parentElement;
        return result;
      }, {
        fields: {},
        errors: {},
        fieldContainers: {}
      });
    this.errors = errors;
    this.fields = fields;
    this.fieldContainers = fieldContainers;
  }
}