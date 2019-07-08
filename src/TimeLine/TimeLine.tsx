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
  /** Ссылка на линию */
  let lineRef: RefObject<HTMLDivElement> = useRef(null);

  /** Функция отрисовки таймлайна */
  const renderLine = (array: ITimeLine[]): void => {
    try {
      if (array && array.length > 0 && timelineRef.current && lineRef.current) {
        const circles = timelineRef.current.querySelectorAll<HTMLDivElement>('.timeline__center-inner');
        const firstCircle: HTMLDivElement = circles[0];
        const lastCircle: HTMLDivElement = circles[circles.length - 1];
        const lineXOffset: number = firstCircle.offsetLeft + firstCircle.offsetWidth / 2 - lineRef.current.offsetWidth / 2;
        const lineY1: number = firstCircle.getBoundingClientRect().top;

        let lineY2Min: number = lastCircle.getBoundingClientRect().top + lastCircle.offsetHeight;
        const lineY2: number = array.length > data.length ? lineY2Min + 300 : lineY2Min;
        const lineHeight: number = lineY2 - lineY1 - lastCircle.offsetHeight / 2;
        lineRef.current.style.height = `${lineHeight}px`;
        lineRef.current.style.top = `${firstCircle.offsetTop}px`;
        lineRef.current.style.left = `${lineXOffset}px`;
        if (mh) {
          lineRef.current.style.minHeight = `${mh}px`;
        }

      }
    } catch (e) {
      console.error('Timeline error:', e);
    }
  };


  /** Рисуем линию, когда контент готов */
  useEffect(() => {
    setTimeout(() => renderLine(data), 100)
  });


  /** Создаем верстку таймлайна */
  const layout = data.map((item: ITimeLine) => {
    return <TimeLineElement item={item} key={item.iId}/>;
  });

  return (
    <div className='timeline' ref={timelineRef}>
      <div className='timeline__line' ref={lineRef}/>
      {layout}
    </div>
  );

};

export default TimeLine;
