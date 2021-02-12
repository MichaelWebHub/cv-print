import React from 'react';
import './App.scss';
import Header from './Header/Header';
import WorkExperience from './WorkExperience/WorkExperience';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import SoftSkills from './SoftSkills/SoftSkills';
import Hobby from './Hobby/Hobby';
import Courses from './Courses/Courses';
import Certifications from './Certifications/Certifications';

const App: React.FC = () => {
  return (
    <div className="root">
      <Header/>
      
      <div className="body">
        <main className="main">
          <div className="block">
            <h3 className="block__title"> Education </h3>
            <Education/>
          </div>
          
          <div className="block">
            <h3 className="block__title"> Certifications </h3>
            <Certifications/>
          </div>
          
          <div className="block">
            <h3 className="block__title"> Courses </h3>
            <Courses/>
          </div>
          
          <div className="block">
            <h3 className="block__title"> Work Experience</h3>
            <WorkExperience/>
          </div>
        
        </main>
        
        <aside className="aside">
          <div className="block">
            <h3 className="block__title"> Skills </h3>
            <Skills/>
          </div>
          
          {/*<div className="block">*/ }
          {/*  <h3 className="block__title"> Soft Skills </h3>*/ }
          {/*  <SoftSkills/>*/ }
          {/*</div>*/ }
          
          <div className="block">
            <h3 className="block__title"> Languages </h3>
            <Languages/>
          </div>
          
          <div className="block">
            <h3 className="block__title"> Publications </h3>
            <Hobby/>
          </div>
        </aside>
      </div>
    
    </div>
  );
}

export default App;
