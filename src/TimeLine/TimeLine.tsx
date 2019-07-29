import { default as React, RefObject, useEffect, useRef } from 'react';
import './TimeLine.scss';
import { ITimeLine } from './TimeLine.interface';
import TimeLineElement from './TimeLineElement/TimeLineElement';

export interface ITimeLineProps {
  data: ITimeLine[];
  mh?: number;
}

const TimeLine: React.FC<ITimeLineProps> = ({data, mh}) => {

  /** Ссылка на таймлайн */
  let timelineRef: RefObject<HTMLDivElement> = useRef(null);

  /** Создаем верстку таймлайна */
  const layout = data.map((item: ITimeLine) => {
    return <TimeLineElement item={item} key={item.iId}/>;
  });

  return (
    <div className='timeline' ref={timelineRef}>
      {layout}
    </div>
  );

};

export default TimeLine;
