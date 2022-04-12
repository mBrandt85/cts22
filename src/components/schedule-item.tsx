import { generatePath, Link } from "react-router-dom";
import styled from "styled-components"
import { getAula, getTalk, Slot } from '../data';

const StyledSchedule = styled.div`
  padding-bottom: 1rem;
  border-bottom: .05rem solid lightgray;
`
interface ScheduleRowProps {
    session: Slot;
    roomCount: number;
  }

  const timeFormatter = new Intl.DateTimeFormat('sv-SE', {
    hour: '2-digit',
    minute: '2-digit',
  });

  function RoomLink(props: any) {
    if (props.type !== 'fika') {
      return (
        <p>
          <a href={`${props.room.url}`}>{props.room.name}</a>
        </p>
      );
    }
    return null;
  }

  function ReadmoreLink(props: any) {
    if (props.linkToKeynotes !== undefined) {
      return (
        <Link to="/keynotes">Read more</Link>
      );
    }
    return null;
  }

export default function ScheduleItem({ session, roomCount }: ScheduleRowProps){
    const aula = getAula();


  return (
    <StyledSchedule >
        {`${timeFormatter.format(
          session.time,
        )}-${timeFormatter.format(session.endTime)}`}
        {session.type === 'talks' ? (
            Array.from({ length: roomCount }, (_, i) => {
              const talk = getTalk(session.talks![i]);

              if (talk === undefined) {
                return <div />;
              }

              return (
                <div>  {talk.room.shortName} {talk.title}  {talk.speakers
                    .map(speaker => speaker.name)
                    .join(' & ')
                    .toLocaleUpperCase()}
                </div>
              );
            })
          ) : (
            <div>
                      <a className="room-color" href={`${getAula}`}>
                        A
                      </a>
                 
                   {session.title}
                  {session.speaker}
                  <RoomLink
                    type={session.type}
                    room={aula}
                    time={session.time}
                    endTime={session.endTime}
                  />
                  <ReadmoreLink linkToKeynotes={session.linkToKeynotes} />
            </div>
          )}
    </StyledSchedule >
  )
}