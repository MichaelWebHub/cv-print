import React from 'react';
import TimeLine from '../TimeLine/TimeLine';
import { ITimeLine } from '../TimeLine/TimeLine.interface';
import GubkinLogo  from '../assets/images/gubkin.png'

const Education: React.FC = () => {

  const data: ITimeLine[] = [
    {
      iId: 1,
      sBeginDate: '09.2012',
      sEndDate: '06.2018',
      sPlace: 'Gubkin University',
      sParamName: 'BS and MS - Petroleum engineering',
      sImage: GubkinLogo
    },
    // {
    //   iId: 2,
    //   sBeginDate: '09.2012',
    //   sEndDate: '06.2016',
    //   sPlace: 'Gubkin University',
    //   sParamName: 'Bachelor of petroleum engineering',
    //   sImage: GubkinLogo
    // }
  ];

  return (
    <TimeLine data={data} />
  );
};

export default Education;
