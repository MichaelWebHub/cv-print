import React from 'react';
import TimeLine from '../TimeLine/TimeLine';
import { ITimeLine } from '../TimeLine/TimeLine.interface';
import Sberbank from '../assets/images/sber.png';
import Netology from '../assets/images/netology.png';
import Psi from '../assets/images/psi.png';
import Ilf from '../assets/images/ilf.png';

const WorkExperience: React.FC = () => {

  const data: ITimeLine[] = [
    {
      iId: 1,
      sBeginDate: '05.2018',
      sEndDate: 'current',
      sPlace: 'PJSC Sberbank',
      sParamName: 'Senior Frontend Developer',
      sImage: Sberbank,
      aAchievements: [
        {
          iId: 1,
          sName: 'Implemented Angular and React',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Built 10 web apps for 350.000+ users',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: 'Built smooth mobile components with close to native gestures',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 4,
          sName: 'Drove best practice implementation for my team employees',
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
      sImage: Netology,
      aAchievements: [
        {
          iId: 1,
          sName: 'Taught 4000+ students the layouts',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 3,
      sBeginDate: '01.2015',
      sEndDate: 'current',
      sPlace: 'Freelance Web Developer',
      sParamName: '',
      aAchievements: [
        {
          iId: 1,
          sName: 'Wrote frontend for an e-commerce fashion startup',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Created a MEAN stack website for a petrochemical company with its own CMS',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: 'Created a web app for Gubkin SPE where students can learn about oil and gas events and apply for them',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 4,
      sBeginDate: '09.2017',
      sEndDate: '11.2017',
      sPlace: 'ILF Consulting Engineers',
      sParamName: 'Intern Engineer',
      sImage: Ilf,
      sCountry: 'Munich, Germany',
      aAchievements: [
        {
          iId: 1,
          sName: 'Abroad work experience',
          iQuarter: 1,
          iYear: 20173,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Modeled oil and gas equipment in 3D',
          iQuarter: 1,
          iYear: 20173,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 5,
      sBeginDate: '10.2014',
      sEndDate: '11.2017',
      sPlace: 'PSI Software AG',
      sImage: Psi,
      sParamName: 'Software Engineer',
      aAchievements: [
        {
          iId: 1,
          sName: 'Draw SVG schemas for Gazprom control rooms',
          iQuarter: 1,
          iYear: 20173,
          sDescription: 'Angular',
        },
        {
          iId: 2,
          sName: 'Wrote M42 scripts to connect schemas and database',
          iQuarter: 1,
          iYear: 20173,
          sDescription: 'Angular',
        }
      ]
    }
  ];

  return (
    <TimeLine data={data} mh={322} />
  );
};

export default WorkExperience;
