import React, { useMemo, useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const eventsSeed = [
  { id: 1, title: 'Intro to Composting', date: new Date(new Date().getFullYear(), new Date().getMonth(), 6), time: '10:00 AM', location: 'Garden Shed', type: 'Workshop' },
  { id: 2, title: 'Seedling Swap', date: new Date(new Date().getFullYear(), new Date().getMonth(), 12), time: '11:00 AM', location: 'Main Yard', type: 'Community' },
  { id: 3, title: 'Harvest & Cook Demo', date: new Date(new Date().getFullYear(), new Date().getMonth(), 20), time: '5:30 PM', location: 'Outdoor Kitchen', type: 'Workshop' },
  { id: 4, title: 'Compost Drop-off Drive', date: new Date(new Date().getFullYear(), new Date().getMonth(), 27), time: '9:00 AM', location: 'Alley Gate', type: 'Compost' },
];

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function addMonths(date, n) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1);
}

function getCalendarGrid(date) {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const startDay = (start.getDay() + 6) % 7; // make Monday=0
  const daysInMonth = end.getDate();

  const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  const daysInPrevMonth = prevMonth.getDate();

  const cells = [];
  // Previous month spill
  for (let i = startDay - 1; i >= 0; i--) {
    const d = new Date(date.getFullYear(), date.getMonth() - 1, daysInPrevMonth - i);
    cells.push({ date: d, outside: true });
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(date.getFullYear(), date.getMonth(), d), outside: false });
  }
  // Next month spill to complete 42 cells (6 weeks)
  let nextDay = 1;
  while (cells.length % 7 !== 0 || cells.length < 42) {
    const d = new Date(date.getFullYear(), date.getMonth() + 1, nextDay++);
    cells.push({ date: d, outside: true });
  }
  return cells;
}

const EventsCalendar = () => {
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = useMemo(() => eventsSeed, []);

  const grid = useMemo(() => getCalendarGrid(month), [month]);
  const monthLabel = month.toLocaleString(undefined, { month: 'long', year: 'numeric' });

  function eventsOn(date) {
    return events.filter((e) =>
      e.date.getFullYear() === date.getFullYear() &&
      e.date.getMonth() === date.getMonth() &&
      e.date.getDate() === date.getDate()
    );
  }

  const selectedEvents = eventsOn(selectedDate);

  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex items-end justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center bg-green-700 text-white w-10 h-10 rounded-lg">
              <CalendarIcon size={18} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">Calendar of Events</h2>
              <p className="text-stone-600">Workshops, swaps, and community composting dates</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setMonth((m) => addMonths(m, -1))}
              className="px-3 py-2 rounded-md border border-stone-300 bg-white hover:bg-stone-50"
            >
              ← Prev
            </button>
            <div className="px-3 py-2 rounded-md bg-stone-100 text-stone-800 font-medium">{monthLabel}</div>
            <button
              onClick={() => setMonth((m) => addMonths(m, 1))}
              className="px-3 py-2 rounded-md border border-stone-300 bg-white hover:bg-stone-50"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-sm select-none">
          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
            <div key={d} className="text-center font-medium text-stone-600">{d}</div>
          ))}
          {grid.map(({ date, outside }) => {
            const hasEvents = eventsOn(date).length > 0;
            const isToday = new Date().toDateString() === date.toDateString();
            const isSelected = selectedDate.toDateString() === date.toDateString();
            return (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={[
                  'aspect-square rounded-lg border relative flex items-center justify-center',
                  outside ? 'text-stone-400 border-stone-200 bg-stone-50' : 'text-stone-800 border-stone-200 bg-white',
                  isSelected ? 'ring-2 ring-green-700' : '',
                ].join(' ')}
                title={hasEvents ? `${eventsOn(date).length} event(s)` : undefined}
              >
                <span className={isToday ? 'font-bold' : ''}>{date.getDate()}</span>
                {hasEvents && (
                  <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-green-700" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-stone-200 p-5 bg-stone-50">
            <h3 className="font-semibold text-stone-900">Events on {selectedDate.toLocaleDateString()}</h3>
            <div className="mt-3 space-y-3">
              {selectedEvents.length === 0 && (
                <div className="text-sm text-stone-600">No events scheduled for this day.</div>
              )}
              {selectedEvents.map((ev) => (
                <div key={ev.id} className="rounded-lg bg-white p-4 border border-stone-200">
                  <div className="text-sm text-green-800 font-medium">{ev.type}</div>
                  <div className="font-semibold text-stone-900">{ev.title}</div>
                  <div className="text-sm text-stone-600">{ev.time} • {ev.location}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-stone-200 p-5 bg-white">
            <h3 className="font-semibold text-stone-900">Upcoming</h3>
            <ul className="mt-3 divide-y divide-stone-200">
              {events
                .slice()
                .sort((a, b) => a.date - b.date)
                .map((ev) => (
                  <li key={ev.id} className="py-3 flex items-start gap-3">
                    <div className="w-12 text-center">
                      <div className="text-xs text-stone-500">{ev.date.toLocaleString(undefined, { month: 'short' })}</div>
                      <div className="text-lg font-bold text-stone-900 leading-none">{ev.date.getDate()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-green-800 font-medium">{ev.type}</div>
                      <div className="font-medium text-stone-900">{ev.title}</div>
                      <div className="text-sm text-stone-600">{ev.time} • {ev.location}</div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
