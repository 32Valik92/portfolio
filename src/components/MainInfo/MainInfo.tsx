import './MainInfo.css';

import React, {FC} from 'react';

import {movieDB} from '../../constants';
import {AboutMe} from '../AboutMe/AboutMe';
import {ContactForm} from '../ContactForm/ContactForm';
import {Phrase} from '../Phrase/Phrase';
import {Projects} from '../Projects/Projects';
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
            <h2 id={'projects'}>Projects</h2>
            <Projects projectInfo={movieDB} key={1}/>
         </div>
         <ContactForm/>
      </div>
   );
};

export {MainInfo};