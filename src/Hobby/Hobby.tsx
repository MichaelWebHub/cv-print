import React from 'react';
import './Hobby.scss';

export interface IHobby {
  id: number;
  icon: string;
  name: string;
}

export interface IPublications {
  id: string;
  link: string;
  title: string;
}

const Hobby: React.FC = () => {

  // const data: IHobby[] = [
  //   {
  //     id: 1,
  //     icon: 'fas fa-book',
  //     name: 'Read'
  //   },
  //   {
  //     id: 2,
  //     icon: 'fas fa-file-code',
  //     name: 'Code'
  //   },
  //   {
  //     id: 3,
  //     icon: 'fas fa-plane',
  //     name: 'Travel'
  //   },
  //   {
  //     id: 4,
  //     icon: 'fas fa-chart-bar',
  //     name: 'Trade'
  //   }
  // ];

  const data: IPublications[] = [
    {
      id: '1',
      link: 'https://medium.com/swlh/react-router-with-a-single-config-file-61777f306b4f?source=friends_link&sk=77448241572e6b4c32b07cef8f4cfe66',
      title: '[React] Router with a single config file'
    },
    {
      id: '2',
      link: 'https://medium.com/swlh/painless-react-form-handling-with-usereactiveform-827312878458?source=friends_link&sk=d86dfa4f1ce34549dc448296fb510dda',
      title: 'Painless React Form Handling with useReactiveForm'
    }
  ]

  return (
    <div className='publications'>
      {
        data.map((el: IPublications) => (
          <div className="publication" key={el.id}>
            <div className="soft-skill__circle"/>
            <h3 className="publication__name">
              <a href={el.link}  target="_blank" className="publication__link">
                {el.title}
              </a>
            </h3>
          </div>
        ))
      }
    </div>
  );
};

export default Hobby;
