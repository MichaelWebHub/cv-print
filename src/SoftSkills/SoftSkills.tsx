import React from 'react';
import './SoftSkills.scss';

export interface ISoftSkill {
  name: string;
}

const SoftSkills: React.FC = () => {

  const data: ISoftSkill[] = [
    {
      name: '13 лет опыта в транспортной и складской логистике'
    },
    {
      name: '6 лет руководил отделом логистики'
    },
    {
      name: 'Управлял коллективом от 10 человек'
    },
    {
      name: 'Умение вести переговоры'
    },
    {
      name: 'Опыт по организации и проведению тендеров'
    },
    {
      name: 'Внимание к деталям'
    },
    {
      name: 'Большой опыт работы в северных регионах страны'
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
