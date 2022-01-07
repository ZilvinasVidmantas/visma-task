class CalendarDay {
  date;
  events;
  isCurrentMonth;

  // HTML elements
  htmlElement;

  constructor({ date, isCurrentMonth }) {
    this.events = [];
    this.date = new Date(new Date(date.getTime()));
    this.isCurrentMonth = isCurrentMonth;
    this.initView();
  }

  initView = () => {
    this.htmlElement = document.createElement('span');
    this.htmlElement.className = 'calendar__month-day';
    if (!this.isCurrentMonth) {
      this.htmlElement.classList.add('muted');
    }
    this.htmlElement.innerHTML = `
      <span class="calendar__month-day__number">${this.date.getDate()}</span>
    `;
  }

}