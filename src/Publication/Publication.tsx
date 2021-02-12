import React from 'react';
import './Publication.scss';

export interface IPublications {
  id: string;
  link: string;
  title: string;
}

const Publication: React.FC = () => {
  
  const data: IPublications[] = [
    {
      id: '1',
      link: 'https://medium.com/swlh/react-router-with-a-single-config-file-61777f306b4f?source=friends_link&sk=77448241572e6b4c32b07cef8f4cfe66',
      title: 'React Router with a single config file'
    },
    {
      id: '2',
      link: 'https://medium.com/@michael.kutateladze/painless-react-form-handling-with-usereactiveform-827312878458?source=friends_link&sk=d86dfa4f1ce34549dc448296fb510dda',
      title: 'React Form Handling with useReactiveForm'
    },
    {
      id: '3',
      link: 'https://medium.com/@michael.kutateladze/comprehensible-redux-for-react-applications-4a9e7ce1dba1?source=friends_link&sk=eb3fc0c9d38c60b52318e969cdc5f15a',
      title: 'Comprehensible Redux for React applications'
    }
  ]
  
  return (
    <div className='publications'>
      {
        data.map((el: IPublications) => (
          <div className="publication" key={ el.id }>
            <div className="soft-skill__circle"/>
            <h3 className="publication__name">
              <a href={ el.link } target="_blank" className="publication__link">
                { el.title } <i className='fa fa-link'/>
              </a>
            </h3>
          </div>
        ))
      }
    </div>
  );
};

export default Publication;
