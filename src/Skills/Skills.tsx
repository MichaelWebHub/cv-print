import React from 'react';
import redux from '../redux.svg';
import mongo from '../mongodb-icon.svg';
import rxjs from '../rxjs.png';
import ionic from '../ionic.png';
import ns from '../ns.png';
import ts from '../ts.png';
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
      icon: 'fab fa-html5',
      name: 'HTML',
      rating: 9.75,
      class: 'html',
    },
    {
      id: 2,
      icon: 'fab fa-css3-alt',
      name: 'CSS',
      rating: 9.75,
      class: 'css',
    },
    {
      id: 3,
      icon: 'fab fa-js-square',
      name: 'JavaScript',
      rating: 9.5,
      class: 'javascript',
    },
    {
      id: 13,
      image: ts,
      name: 'TypeScript',
      rating: 9.2,
      class: 'typescript',
    },
    {
      id: 4,
      icon: 'fab fa-angular',
      name: 'Angular',
      class: 'angular',
      rating: 9.4
    },
    {
      id: 5,
      icon: 'fab fa-react',
      name: 'React',
      rating: 7,
      class: 'react',
    },
    {
      id: 10,
      icon: 'fab fa-vuejs',
      name: 'Vue',
      rating: 5,
      class: 'vue',
    },
    {
      id: 6,
      image: redux,
      name: 'Redux',
      rating: 10,
      class: 'redux',
    },
    {
      id: 11,
      image: rxjs,
      name: 'RxJs',
      rating: 9,
      class: 'rxjs',
    },
    {
      id: 8,
      image: mongo,
      name: 'MongoDB',
      rating: 7,
      class: 'mongo',
    },
    {
      id: 9,
      icon: 'fab fa-node-js',
      name: 'NodeJS',
      rating: 6,
      class: 'node'
    },
    {
      id: 11,
      image: ionic,
      name: 'Ionic',
      rating: 5,
      class: 'ionic'
    },
    {
      id: 12,
      image: ns,
      name: 'NativeScript',
      rating: 5,
      class: 'nativescript',
    },
    {
      id: 7,
      icon: 'fab fa-github',
      name: 'Git',
      rating: 6.5,
      class: 'git',
    }
  ];

  return (
    <div>
      {
        data.map((el: ISkill) => (
          <div className="skill" key={el.id}>
            {el.icon ? <i className={`skill__image ${el.class} ${el.icon}`}/> : ''}
            {el.image ? <img className='skill__image' src={el.image} alt=""/> : ''}
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
