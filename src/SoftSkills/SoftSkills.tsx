import React from 'react';
import './SoftSkills.scss';

export interface ISoftSkill {
  name: string;
}

const SoftSkills: React.FC = () => {

  const data: ISoftSkill[] = [
    {
      name: 'Leading a team of 8 developers'
    },
    {
      name: 'Constantly learning'
    },
    {
      name: 'Can work up to 14 hours straight if I am interested'
    },
    {
      name: 'Reducing conflicts to constructive dialogues'
    },
    // {
    //   name: 'Paying attention to details'
    // }
  ];

  return (
    <div>
      {
        data.map((el: ISoftSkill, i: number) => (
          <div className="soft-skill" key={i}>
            <div className="soft-skill__circle"/>
            <span className="soft-skill__name">{el.name}</span>
          </div>
        ))
      }
    </div>
  );
};

export default SoftSkills;
