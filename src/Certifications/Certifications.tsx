import React from 'react';
import './Certifications.scss';
import microsoft from '../assets/images/microsoft.svg';

interface ICertificate {
  id: number;
  logo: any;
  name: string;
  url: string;
  provider: string;
}

const Certifications: React.FC = () => {
  
  const data: ICertificate[] = [
    {
      id: 1,
      name: 'MTA: Introduction to Programming Using JavaScript - Certified 2021',
      url: 'https://www.youracclaim.com/badges/cb2c943b-fb39-4810-85c4-0224446141bb?source=linked_in_profile',
      logo: microsoft,
      provider: 'Microsoft'
    }
  ];
  
  return (
    <div className='certificates'>
      {
        data.map((c: ICertificate, ind: number) => (
          <div className='certificate' key={ ind }>
            <img src={ c.logo } className='certificate__logo'/>
            <div className='certificate__details'>
              <h4 className='certificate__name'>
                <a target='_blank' className='edu__publication-link'
                   href={c.url}>{c.name} <i className='fa fa-link'/>
                </a>
              </h4>
              <p className='certificate__provider'>{c.provider}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Certifications;
