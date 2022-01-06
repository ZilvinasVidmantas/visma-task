class CalendarDay {
  date;
  events;
  isCurrentMonth;

  constructor({ date, isCurrentMonth }) {
    this.events = [];
    this.date = new Date(new Date(date.getTime()));
    this.isCurrentMonth = isCurrentMonth;
  }
}