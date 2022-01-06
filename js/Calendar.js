const getMondayByWeekDay = (initDate) => {
  const date = new Date(initDate.getTime());
  const monthDay = date.getDate();
  const weekDay = date.getDay();
  const monday = new Date(date.setDate(monthDay - weekDay + 1));

  return monday;
};

const getSundayByWeekDay = (initDate) => {
  const date = new Date(initDate.getTime());
  const monthDay = date.getDate();
  const weekDay = date.getDay();
  const sunday = new Date(date.setDate(monthDay - weekDay + 7));

  return sunday;
};

const getCalendarDays = (date) => {
  const firstMonthDay = new Date(date.getFullYear(), date.getMonth());
  const lastMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const firstCalendarMonday = getMondayByWeekDay(firstMonthDay);
  const lastCalendarSunday = getSundayByWeekDay(lastMonthDay);

  return {
    firstMonthDay,
    lastMonthDay,
    firstCalendarMonday,
    lastCalendarSunday,
  };
};

const createCalendarDays = (date = new Date()) => {
  const {
    firstMonthDay,
    lastMonthDay,
    firstCalendarMonday,
    lastCalendarSunday,
  } = getCalendarDays(date);

  const calendarDays = [];

  while (firstCalendarMonday < firstMonthDay) {
    const monthDay = firstCalendarMonday.getDate();
    const calendarDay = new CalendarDay({
      date: firstCalendarMonday,
      isCurrentMonth: false
    })
    calendarDays.push(calendarDay);
    firstCalendarMonday.setDate(monthDay + 1);
  }

  while (firstMonthDay <= lastMonthDay) {
    const monthDay = firstMonthDay.getDate();
    const calendarDay = new CalendarDay({
      date: firstMonthDay,
      isCurrentMonth: true
    })
    calendarDays.push(calendarDay);
    firstMonthDay.setDate(monthDay + 1);
  }

  lastMonthDay.setDate(lastMonthDay.getDate() + 1);
  while (lastMonthDay <= lastCalendarSunday) {
    const monthDay = lastMonthDay.getDate();
    const calendarDay = new CalendarDay({
      date: lastMonthDay,
      isCurrentMonth: false
    })
    calendarDays.push(calendarDay);
    lastMonthDay.setDate(monthDay + 1);
  }

  return calendarDays;
}

class Calendar {
  currentMonth;

  constructor(selector) {
    this.calendarDays = createCalendarDays();
    const

  }

  prevMonth = () => {

  }

  nextMonth = () => {

  }

  setDays = () => {

  }

  loadEvents = () => {

  }

}