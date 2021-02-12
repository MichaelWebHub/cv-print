import React from 'react';
import './Skills.scss';

export interface ISkill {
  id: number,
  icon?: string;
  name: string;
  rating: number;
  image?: string;
  class: string;
}

const Skills: React.FC = () => {

  const data: ISkill[] = [
    {
      id: 1,
      name: 'HTML',
      rating: 9.75,
      class: 'html',
    },
    {
      id: 2,
      name: 'CSS',
      rating: 9.75,
      class: 'css',
    },
    {
      id: 3,
      name: 'JavaScript',
      rating: 9.5,
      class: 'javascript',
    },
    {
      id: 13,
      name: 'TypeScript',
      rating: 8,
      class: 'typescript',
    },
    // {
    //   id: 4,
    //   icon: 'fab fa-angular',
    //   name: 'Angular',
    //   class: 'angular',
    //   rating: 9.5
    // },
    {
      id: 5,
      name: 'React',
      rating: 9.5,
      class: 'react',
    },
    // {
    //   id: 10,
    //   icon: 'fab fa-vuejs',
    //   name: 'Vue',
    //   rating: 5,
    //   class: 'vue',
    // },
    {
      id: 6,
      name: 'Redux',
      rating: 10,
      class: 'redux',
    },
    {
      id: 11,
      name: 'RxJs',
      rating: 9,
      class: 'rxjs',
    },
    {
      id: 8,
      name: 'MongoDB',
      rating: 7,
      class: 'mongo',
    },
    {
      id: 9,
      name: 'NodeJS',
      rating: 6,
      class: 'node'
    },
    // {
    //   id: 11,
    //   image: ionic,
    //   name: 'Ionic',
    //   rating: 5,
    //   class: 'ionic'
    // },
    // {
    //   id: 12,
    //   image: ns,
    //   name: 'NativeScript',
    //   rating: 5,
    //   class: 'nativescript',
    // },
    {
      id: 7,
      name: 'Git',
      rating: 6.5,
      class: 'git',
    },
    {
      id: 8,
      name: 'Java',
      rating: 3.5,
      class: 'java',
    },
    {
      id: 9,
      name: 'C++',
      rating: 1.5,
      class: 'cpp',
    }
  ];

  return (
    <div>
      {
        data.map((el: ISkill) => (
          <div className="skill" key={el.id}>
            {/*{el.icon ? <i className={`skill__image ${el.class} ${el.icon}`}/> : ''}*/}
            {/*{el.image ? <img className='skill__image' src={el.image} alt=""/> : ''}*/}
            <span className='skill__name'>{el.name}</span>
            <div className="skill__scale">
              <div className="skill__scale-inner" style={{width: `${el.rating * 10}%`}}/>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Skills;
