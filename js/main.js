const eventDataArr = SessionStorage.get('events');
const events = eventDataArr.map(event => new Event(event));

const calendar = new Calendar('#text-calendar', events);