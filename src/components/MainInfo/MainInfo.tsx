import './MainInfo.css';

import React, {FC} from 'react';

import {movieDB, superHeroesInfo} from '../../constants';
import {AboutMe} from '../AboutMe/AboutMe';
import {ContactForm} from '../ContactForm/ContactForm';
import {Phrase} from '../Phrase/Phrase';
import {ProjectsTemplate} from '../ProjectsTemplate/ProjectsTemplate';
import {Skills} from '../Skills/Skills';
import {Welcome} from '../Welcome/Welcome';


const MainInfo: FC = () => {
   return (
      <div className={'main'}>
         <Welcome/>
         <AboutMe/>
         <Skills/>
         <Phrase/>
         <div className={'projects'}>
            <h2 id={'projects'}>PROJECTS</h2>
            <ProjectsTemplate projectInfo={movieDB} key={1}/>
            <ProjectsTemplate projectInfo={superHeroesInfo} key={2}/>
         </div>
         <ContactForm/>
      </div>
   );
};

export {MainInfo};