import './AboutMe.css';

import {faScroll} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FC} from 'react';

import {abutMe, myExpansions} from '../../constants';

const AboutMe: FC = () => {
   return (
      <div className={'aboutME'}>
         <h2 id={'aboutMe'}>ABOUT ME</h2>

         <div className={'textAboutME'}>
            <p>
               {abutMe}
               <br/><br/>
               {myExpansions}
            </p>

            <div className={'divIcon'}>
               <FontAwesomeIcon icon={faScroll} className={'icon'}/>
            </div>

         </div>

      </div>
   );
};

export {AboutMe};