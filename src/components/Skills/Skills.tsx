import './Skills.css';

import React, {FC, useEffect, useRef} from 'react';

import {linuxImg, nodeImg, reduxImg} from '../../assets';
import {skills} from '../../constants';


const Skills: FC = () => {
   const firstBlockRef = useRef<HTMLDivElement | null>(null);
   const secondBlockRef = useRef<HTMLDivElement | null>(null);

   // Function for checking where we are for showing Skills blocks
   const checkScroll = (): void => {
      const windowHeight = window.innerHeight;

      if (firstBlockRef.current !== null) {
         // If this distance is negative or zero, it means that the upper edge of the element has entered the visible area of the window.
         const firstBlockPosition = firstBlockRef.current.getBoundingClientRect().top;

         if (firstBlockPosition < windowHeight) {
            // If we can see, we will add class
            firstBlockRef.current.classList.add('visible');
         }
      }

      // The same situation
      if (secondBlockRef.current !== null) {
         const secondBlockPosition = secondBlockRef.current.getBoundingClientRect().top;

         if (secondBlockPosition < windowHeight) {
            secondBlockRef.current.classList.add('visible');
         }
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', checkScroll);

      return () => {
         window.removeEventListener('scroll', checkScroll);
      };
   }, []);

   return (
      <div className={'skillsDiv'}>
         <h2 id={'skills'}>SKILLS</h2>

         <div className={'skills'}>

            <div ref={firstBlockRef} className={'frontAndBack'}>
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

            <div ref={secondBlockRef} className={'tools'}>
               <h2>Tools</h2>

               <div className={'listAndPhoto'}>
                  <div className={'toolsList'}>
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