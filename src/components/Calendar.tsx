/* eslint-disable import/no-extraneous-dependencies */

'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  return (
    <>
      <nav className="calendar-nav">
        <h1 className="calendar-title">Calendar</h1>
      </nav>
      <main className="calendar-main">
        <div className="calendar-grid-container">
          <div className="calendar-calendar">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
              ]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek',
              }}
              nowIndicator
              editable
              droppable
              selectable
              selectMirror
            />
          </div>
        </div>
      </main>
    </>
  );
}
