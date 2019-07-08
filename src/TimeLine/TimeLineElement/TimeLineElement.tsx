import { default as React } from 'react';
import { ITimeLine, ITimelineAchievement } from '../TimeLine.interface';

interface ITimeLineElement {
  item: ITimeLine;
}

/** Элемент таймлайна */
const TimeLineElement: React.FC<ITimeLineElement> = ({ item }) => {


  return (
    <div className='timeline__element avoid-page-break'>
      <div className='timeline__element-left'>
        <p className='timeline__element-left--row'>{item.sBeginDate} - {item.sEndDate ? item.sEndDate : 'наст. время'}</p>
        {item.sCountry ? <p className='timeline__element-left--row country'>{item.sCountry}</p> : ''}
      </div>

      <div className={`timeline__element-center`}>
        <div className='timeline__center-inner'/>
      </div>
      <div className={`timeline__element-right`}>
        <h3 className='timeline__element-name'>{item.sPlace}</h3>
        {item.sParamName ? <p className='timeline__element-position'>{item.sParamName}</p> : ''}

        {
          item.aAchievements && item.aAchievements.length ?
            (
              <div className='timeline__element-achievements'>
                {
                  item.aAchievements.map((a: ITimelineAchievement) =>
                    <div className='timeline__achievement-wrapper' key={a.iId}>
                      <span className='timeline__achievements-label'/>
                      <span className='timeline__achievement'>{a.sName}</span>
                    </div>
                  )
                }
              </div>
            ) : ''
        }

      </div>
    </div>
  );
};

export default TimeLineElement;
