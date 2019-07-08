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
      name: 'Learning new everyday'
    },
    {
      name: 'Stay focused'
    },
    {
      name: 'Agile working'
    },
    {
      name: 'Respect deadlines'
    },
    {
      name: 'Pay attention to details'
    }
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
