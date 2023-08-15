import './Skills.css';

import React, {FC} from 'react';

import {linuxImg, nodeImg, reduxImg} from '../../assets';
import {skills} from '../../constants';


const Skills: FC = () => {
   return (
      <div className={'skillsDiv'}>
         <h2 id={'skills'}>SKILLS</h2>

         <div className={'skills'}>

            <div className={'frontAndBack'}>
               <div className={'front'}>
                  <h2>Front End</h2>

                  <div className={'listAndPhoto'}>
                     <div className={'frontList'}>
                        {skills.frontEnd.map((item, index) => <div key={index}>{`${item} `}</div>)}
                     </div>
                     <div className={'imgFrontBack'}>
                        <img src={reduxImg} alt="redux" className={'redux'}/>
                     </div>
                  </div>
               </div>

               <div className={'back'}>
                  <h2>Back End</h2>

                  <div className={'listAndPhoto'}>
                     <div className={'backList'}>
                        {skills.backEnd.map((item, index) => <div key={index}>{`${item} `}</div>)}
                     </div>
                     <div className={'imgFrontBack'}>
                        <img src={nodeImg} alt="node.js" className={'node'}/>
                     </div>
                  </div>
               </div>

            </div>

            <div className={'tools'}>
               <h2>Tools</h2>

               <div className={'listAndPhoto'}>
                  <div>
                     {skills.tools.map((item, index) => <div key={index}>{`${item} `}</div>)}
                  </div>
                  <div className={'imgTools'}>
                     <img src={linuxImg} alt="linux" className={'linux'}/>
                  </div>
               </div>

            </div>
         </div>

      </div>
   );
};

export {Skills};