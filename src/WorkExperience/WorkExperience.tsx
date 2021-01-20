import React from 'react';
import TimeLine from '../TimeLine/TimeLine';
import { ITimeLine } from '../TimeLine/TimeLine.interface';
import Sberbank from '../assets/images/sber.png';
import VTB from '../assets/images/vtb.png';
import Netology from '../assets/images/netology.png';
import Psi from '../assets/images/psi.png';
import Ilf from '../assets/images/ilf.png';

const WorkExperience: React.FC = () => {

  const data: ITimeLine[] = [
    {
      iId: 1,
      sBeginDate: '08.2020',
      sEndDate: 'current',
      sPlace: 'VTB Bank',
      sParamName: 'Frontend Engineer',
      sCountry: 'Moscow, Russia',
      sImage: VTB,
      aAchievements: [
        {
          iId: 1,
          sName: <a className='edu__publication-link' href='https://www.npmjs.com/package/react-generator-cmd' target='_blank'>Created Node.js CLI for creation of components, router, interceptor and redux state <i className='fa fa-link'/></a>,
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: <a href='https://juicy-book.web.app/' target='_blank' className='edu__publication-link'>Created UI Components Library <i className='fa fa-link'/></a>,
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    {
      iId: 1,
      sBeginDate: '05.2018',
      sEndDate: '08.2020',
      sPlace: 'PJSC Sberbank',
      sParamName: 'Frontend Engineer',
      sCountry: 'Moscow, Russia',
      sImage: Sberbank,
      aAchievements: [
        {
          iId: 1,
          sName: <a href='https://github.com/Michaeladze/useReactiveForm' target='_blank' className='edu__publication-link'>Created React form handling hook which does not re-render the page <i className='fa fa-link'/></a>,
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        {
          iId: 3,
          sName: <a href='https://graph-65237.firebaseapp.com/' target='_blank' className='edu__publication-link'>Created Directed Cyclic Graph visualization library with evenly distributed nodes around the process for Process Mining <i className='fa fa-link'/></a>,
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        },
        // {
        //   iId: 4,
        //   sName: 'Created library for handling multiple xhr-polling requests simulating web sockets',
        //   iQuarter: 1,
        //   iYear: 20184,
        //   sDescription: 'Angular',
        // },
        // {
        //   iId: 2,
        //   sName: 'Built 11 web apps for 350.000+ users with Angular and React, leading a team of 8 developers',
        //   iQuarter: 1,
        //   iYear: 20184,
        //   sDescription: 'Angular',
        // },
      ]
    },
    {
      iId: 2,
      sBeginDate: '05.2017',
      sEndDate: 'current',
      sPlace: 'Netology - Online University',
      sParamName: 'Teacher at HTML/CSS course',
      sCountry: 'Remote',
      sImage: Netology,
      aAchievements: [
        {
          iId: 1,
          sName: 'Taught 5000+ students the layouts',
          iQuarter: 1,
          iYear: 20184,
          sDescription: 'Angular',
        }
      ]
    },
    // {
    //   iId: 3,
    //   sBeginDate: '01.2015',
    //   sEndDate: 'current',
    //   sPlace: 'Freelance Web Developer',
    //   sCountry: 'Remote',
    //   sParamName: '',
    //   aAchievements: [
    //     {
    //       iId: 1,
    //       sName: 'Wrote frontend for an e-commerce fashion startup',
    //       iQuarter: 1,
    //       iYear: 20184,
    //       sDescription: 'Angular',
    //     },
    //     {
    //       iId: 2,
    //       sName: 'Created a MEAN stack website for a petrochemical company with its own CMS',
    //       iQuarter: 1,
    //       iYear: 20184,
    //       sDescription: 'Angular',
    //     }
    //   ]
    // },
    // {
    //   iId: 4,
    //   sBeginDate: '09.2017',
    //   sEndDate: '11.2017',
    //   sPlace: 'ILF Consulting Engineers',
    //   sParamName: 'Intern Engineer',
    //   sImage: Ilf,
    //   sCountry: 'Munich, Germany',
    //   aAchievements: [
    //     {
    //       iId: 2,
    //       sName: 'Modeled oil and gas equipment in 3D',
    //       iQuarter: 1,
    //       iYear: 20173,
    //       sDescription: 'Angular',
    //     }
    //   ]
    // },
    // {
    //   iId: 5,
    //   sBeginDate: '10.2014',
    //   sEndDate: '11.2017',
    //   sPlace: 'PSI Software AG',
    //   sCountry: 'Moscow, Russia',
    //   sImage: Psi,
    //   sParamName: 'Software Engineer',
    //   aAchievements: [
    //     {
    //       iId: 1,
    //       sName: 'Draw SVG schemas for Gazprom control rooms',
    //       iQuarter: 1,
    //       iYear: 20173,
    //       sDescription: 'Angular',
    //     }
    //   ]
    // }
  ];

  return (
    <TimeLine data={data} mh={322} />
  );
};

export default WorkExperience;
