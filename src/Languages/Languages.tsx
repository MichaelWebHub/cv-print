import React from 'react';
import "./Language.scss";

export interface ILanguage {
  id: number;
  flag: string;
  language: string;
  level: string;
}

const Languages: React.FC= () => {

  const data: ILanguage[] = [
    {
      id: 1,
      flag: '🇷🇺',
      language: 'Russian',
      level: 'Native Speaker'
    },
    {
      id: 2,
      flag: '🇺🇸',
      language: 'English',
      level: 'Upper Intermediate (FCE 170)'
    },
    {
      id: 3,
      flag: '🇩🇪',
      language: 'German',
      level: 'Elementary'
    }
  ];

  return (
    <div>
      {
        data.map((l: ILanguage) => (
          <div className="language" key={l.id}>
            <span className="language__flag">{l.flag}</span>
            <span>
              <span className="language__flag">{l.language}</span>
              <span className="language__level">{l.level}</span>
            </span>
          </div>
        ))
      }
    </div>
  );
};

export default Languages;
