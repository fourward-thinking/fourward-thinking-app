/* eslint-disable import/no-extraneous-dependencies */

'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-darkgreen-100 p-4">
        <h1 className="font-bold text-2x1 text-gray-700">Calendar</h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-10">
          <div className="col-span-8">
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
