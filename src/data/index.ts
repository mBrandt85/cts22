import { addMinutes, compareAsc } from 'date-fns';

import rooms from './rooms.json';
import workshops from './workshops.json';
import rawNews from './news.json';
import rawTalks from './talks.json';
import rawSchedule from './schedule.json';
import rawKeynotes from './keynotes.json';

function makeReadonly<T>(array: readonly T[]): readonly T[] {
  return array;
}

function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value != null;
}

// ES2019 Object.fromEntries polyfill
declare global {
  interface ObjectConstructor {
    fromEntries<Entry extends [string | symbol, unknown]>(
      entries: Iterable<Entry>,
    ): Record<Entry[0], Entry[1]>;
  }
}

if (typeof Object.fromEntries !== 'function') {
  Object.fromEntries = function fromEntries(entries: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj: any = {};
    for (const [key, value] of entries) {
      obj[key] = value;
    }
    return obj;
  };
}

export type News = ReturnType<typeof getNews>[number];
export type Room = ReturnType<typeof getRooms>[number];
export type Talk = ReturnType<typeof getTalks>[number];
export type Schedule = ReturnType<typeof getSchedule>;
export type Slot = Schedule[number];
export type Speaker = Talk['speakers'][number];

export function getDateFromString(dateString: string) {
  if (navigator.vendor.includes('Apple')) {
    const dateParts = dateString.substring(0, 10).split('-');
    const timePart = dateString.substr(11);
    return new Date(`${dateParts[1]}/${dateParts[2]}/${dateParts[0]} ${timePart}`);
  } else {
    return new Date(dateString);
  }
}

export function getRooms() {
  return makeReadonly(rooms).filter(function(r) {
    return 'talk' === r.type;
  });
}

export function getWorkshops() {
  return makeReadonly(workshops);
}

export function getAula() {
  return makeReadonly(rooms).filter(function(r) {
    return 'aula' === r.type;
  })[0];
}

export function getNews() {
  const news = rawNews
    .map(({ title, message, date }) => ({ title, message, date: getDateFromString(date) } as const))
    .sort((a, b) => compareAsc(b.date, a.date));

  return makeReadonly(news);
}

export function getSchedule() {
  let time = getDateFromString(rawSchedule.startTime);
  const schedule = rawSchedule.slots
    .map(slot => {
      const endTime = addMinutes(time, slot.duration);
      const newSlot = { ...slot, time, endTime } as const;
      time = endTime;
      return newSlot;
    })
    .sort((a, b) => compareAsc(a.time, b.time));

  return makeReadonly(schedule);
}

export function getKeynotes() {
  return makeReadonly(rawKeynotes);
}

export function getTalks() {
  const schedule = getSchedule();

  const talks = rawTalks
    .map(talk => {
      // Find the slot where the talk is scheduled
      for (const { talks, time } of schedule) {
        if (talks !== undefined) {
          const roomIndex = talks.indexOf(talk.id);
          if (roomIndex !== -1) {
            const room = getRooms()[roomIndex];
            if (room !== undefined) {
              // Add the time, room and color
              return {
                ...talk,
                time,
                room,
              } as const;
            }
          }
        }
      }
      return undefined;
    })
    .filter(isNonNullable);

  talks.sort((a, b) => {
    const nameA = a.speakers[0].name;
    const nameB = b.speakers[0].name;

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  });
  return makeReadonly(talks);
}

export function getTalk(id: number) {
  return getTalks().find(talk => talk.id === id);
}
