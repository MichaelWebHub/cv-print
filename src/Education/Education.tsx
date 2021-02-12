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
      sParamName: 'BSc and MSc - Petroleum engineering',
      sImage: GubkinLogo,
      aAchievements: [
        {
          iId: 1,
          sName: 'Was granted a certificate of appreciation for creating apps for the university',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: <a target='_blank' className='edu__publication-link' href="https://tng.elpub.ru/jour/article/view/673?locale=ru_RU">My contribution towards the research project has led to me being named co-author of a publication <i className='fa fa-link'/></a>,
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
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
