import React from 'react';
import './App.scss';
import Header from './Header/Header';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education/Education';
import Courses from './Courses/Courses';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import SoftSkills from './SoftSkills/SoftSkills';
import Hobby from './Hobby/Hobby';

const App: React.FC = () => {
  return (
    <div className="root">
      <Header/>

      <div className="body">
        <main className="main">
          <div className="block">
            <h3 className="block__title"><i className="fas fa-briefcase"/> Work Experience</h3>
            <WorkExperience/>
          </div>

          <div className="block">
            <h3 className="block__title"><i className="fas fa-university"/> Education </h3>
            <Education/>
          </div>

          {/*<div className="block">*/}
          {/*  <h3 className="block__title"><i className="fas fa-graduation-cap"/> Courses </h3>*/}
          {/*  <Courses/>*/}
          {/*</div>*/}
        </main>

        <aside className="aside">
          <div className="block">
            <h3 className="block__title"><i className="fas fa-tasks"/> Skills </h3>
            <Skills/>
          </div>

          <div className="block">
            <h3 className="block__title"><i className="fas fa-user"/> Soft Skills </h3>
            <SoftSkills/>
          </div>

          <div className="block">
            <h3 className="block__title"><i className="fas fa-globe-europe"/> Languages </h3>
            <Languages/>
          </div>

          <div className="block">
            <h3 className="block__title"><i className="fas fa-football-ball"/> Hobbies </h3>
            <Hobby/>
          </div>
        </aside>
      </div>

    </div>
  );
}

export default App;
