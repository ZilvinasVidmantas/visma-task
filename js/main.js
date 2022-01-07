const eventDataArr = SessionStorage.get('events');
const events = eventDataArr.map(event => new Event(event));

const addEvent = (event) => {
  console.log('main.js addEvent')
  console.log(event)
}

const calendar = new Calendar('#calendar', events);
const sidebar = new Sidebar('#sidebar', addEvent);