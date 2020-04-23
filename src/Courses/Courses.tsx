import React from 'react';
import './Courses.scss'

export interface ICourse {
  id: number;
  provider: string;
  courses: string[];
}

const Courses: React.FC = () => {

  const data: ICourse[] = [
    {
      id: 1,
      provider: 'НОУ "Корпоративный институт ОАО "Газпром"',
      courses: ['Материально-техническое обеспечение и комплектация строящихся объектов нефтегазовой отрасли']
    },
    {
      id: 2,
      provider: 'МАДИ, Менеджер по логистике',
      courses: ['Логистика и эффективная экономика на автомобильном транспорте']
    },
    {
      id: 3,
      provider: 'НОУ "Учебный центр "А.Ф. Конто" при Академии профессионального управления, Менеджер по логистике',
      courses: ['MЛогистический менеджмент']
    }
  ];

  return (
    <div className='courses'>
      {
        data.map((c: ICourse, ind: number) => (
          <div className='course' key={ind}>
            <div className="course__content">
              <h4 className="course__provider"> {c.provider} </h4>
              <div className="course__items">
                {c.courses.map((el: string, i: number) => <p className='course__title' key={i}>{el}</p>)}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Courses;
