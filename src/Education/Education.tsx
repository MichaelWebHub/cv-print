import React from 'react';
import TimeLine from '../TimeLine/TimeLine';
import { ITimeLine } from '../TimeLine/TimeLine.interface';

const Education: React.FC = () => {

  const data: ITimeLine[] = [
    {
      iId: 1,
      sBeginDate: '',
      sEndDate: '1996',
      sPlace: 'Московский университет потребительской кооперации',
      sParamName: 'Бухгалтерский учет и аудит, Бухгалтерский учет, анализ и аудит'
    },
    {
      iId: 2,
      sBeginDate: '',
      sEndDate: '1992',
      sPlace: 'Кутаисский политехнический институт',
      sParamName: 'Инженер-технолог общественного питания'
    }
  ];

  return (
    <TimeLine data={data}/>
  );
};

export default Education;
