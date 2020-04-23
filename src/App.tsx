import React from 'react';
import './App.scss';
import Header from './Header/Header';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education/Education';
import Courses from './Courses/Courses';
import Languages from './Languages/Languages';
import SoftSkills from './SoftSkills/SoftSkills';

const App: React.FC = () => {
  return (
    <div className="root">
      <Header/>

      <div className="body">
        <main className="main">
          <div className="block">
            <h3 className="block__title"><i className="fas fa-briefcase"/> Работа</h3>
            <WorkExperience/>
          </div>

          <div className="block">
            <h3 className="block__title"><i className="fas fa-university"/> Образование </h3>
            <Education/>
          </div>

          <div className="block">
            <h3 className="block__title"><i className="fas fa-graduation-cap"/> Курсы </h3>
            <Courses/>
          </div>

          <div className="block avoid-page-break" style={{paddingTop: '30px'}}>
            <h3 className="block__title"><i className="fas fa-user"/> Обо мне </h3>
            <SoftSkills/>
          </div>

          <div className="block">
            <h3 className="block__title"><i className="fas fa-globe-europe"/> Языки </h3>
            <Languages/>
          </div>
        </main>

        {/*<aside className="aside">*/}
        {/*  <div className="block">*/}
        {/*    <h3 className="block__title"><i className="fas fa-tasks"/> Навыки </h3>*/}
        {/*    <Skills/>*/}
        {/*  </div>*/}

        {/*  <div className="block">*/}
        {/*    <h3 className="block__title"><i className="fas fa-globe-europe"/> Языки </h3>*/}
        {/*    <Languages/>*/}
        {/*  </div>*/}

        {/*  <div className="block">*/}
        {/*    <h3 className="block__title"><i className="fas fa-football-ball"/> Хобби </h3>*/}
        {/*    <Hobby/>*/}
        {/*  </div>*/}
        {/*</aside>*/}
      </div>

    </div>
  );
}

export default App;
