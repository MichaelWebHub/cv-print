import React from 'react';
import './Hobby.scss';

export interface IHobby {
  id: number;
  icon: string;
  name: string;
}

const Hobby: React.FC = () => {

  const data: IHobby[] = [
    {
      id: 1,
      icon: 'fas fa-book',
      name: 'Read'
    },
    {
      id: 2,
      icon: 'fas fa-file-code',
      name: 'Code'
    },
    {
      id: 3,
      icon: 'fas fa-plane',
      name: 'Travel'
    },
    {
      id: 4,
      icon: 'fas fa-chart-bar',
      name: 'Trade'
    }
  ];

  return (
    <div className='hobbies'>
      {
        data.map((el: IHobby, i: number) => (
          <div className="hobby" key={i}>
            <div className="hobby__icon"><i className={el.icon}/></div>
            <p className="hobby__name">{el.name}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Hobby;
