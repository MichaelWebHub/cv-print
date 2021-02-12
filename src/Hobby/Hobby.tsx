import React, { ReactNode } from 'react';
import './Hobby.scss';
import {GiTennisBall, GiWaveSurfer, GiCook} from 'react-icons/gi';
import {AiOutlineFund} from 'react-icons/ai';
import {IoTennisballOutline, IoCodeSlashOutline} from 'react-icons/io5';

interface IHobby {
  id: number;
  icon: ReactNode;
  name: string;
}

const Hobby: React.FC = () => {

  const data: IHobby[] = [
    {
      id: 1,
      icon: <IoTennisballOutline/>,
      name: 'Tennis'
    },
    {
      id: 2,
      icon: <GiWaveSurfer/>,
      name: 'Surf'
    },
    {
      id: 3,
      icon: <GiCook/>,
      name: 'Cook'
    },
    {
      id: 4,
      icon: <AiOutlineFund/>,
      name: 'Trade'
    }
  ];
  
  const hobbiesJSX = data.map((h: IHobby) => (
    <div key={h.id} className='hobby'>
      {h.icon}
      <p className='hobby__name'>{h.name}</p>
    </div>
  ))

  return (
    <div className='hobbies'>
      {hobbiesJSX}
    </div>
  );
};

export default Hobby;
