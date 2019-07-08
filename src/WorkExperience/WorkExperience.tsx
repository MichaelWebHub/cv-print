import React from 'react';
import TimeLine from '../TimeLine/TimeLine';
import { ITimeLine } from '../TimeLine/TimeLine.interface';

const WorkExperience: React.FC = () => {

  const data: ITimeLine[] = [
    {
      iId: 1,
      sBeginDate: '05.2018',
      sEndDate: 'current',
      sPlace: 'PJSC Sberbank',
      sParamName: 'Senior Frontend Developer',
      aAchievements: [
        {
          iId: 1,
          sName: 'Implemented Angular and React which resulted in Time To Market rate decrease',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Built HR Ecosystem web applications for 350.000+ users',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: 'Received highest annual rate',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 2,
      sBeginDate: '05.2017',
      sEndDate: 'current',
      sPlace: 'Netology - Online University',
      sParamName: 'Teacher at HTML/CSS course',
      aAchievements: [
        {
          iId: 1,
          sName: 'Taught 3500+ students',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    // {
    //   iId: 3,
    //   sBeginDate: '11.2017',
    //   sEndDate: '12.2017',
    //   sPlace: 'amoCRM',
    //   sParamName: 'Intern Frontend Developer'
    // },
    {
      iId: 4,
      sBeginDate: '09.2017',
      sEndDate: '11.2017',
      sPlace: 'ILF Consulting Engineers',
      sParamName: 'Intern Engineer',
      sCountry: 'Munich, Germany'
    },
    {
      iId: 5,
      sBeginDate: '10.2014',
      sEndDate: '11.2017',
      sPlace: 'PSI AG',
      sParamName: 'Software Engineer'
    }
  ];

  return (
    <TimeLine data={data} mh={322} />
  );
};

export default WorkExperience;
