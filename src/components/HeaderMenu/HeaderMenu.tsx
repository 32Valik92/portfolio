import React, {FC} from 'react';

const HeaderMenu: FC = () => {
   return (
      <div className={'menu'}>
         <div><a href={'#aboutMe'}>ABOUT</a></div>
         <div><a href={'#skills'}>SKILLS</a></div>
         <div><a href={'#projects'}>PROJECTS</a></div>
      </div>
   );
};

export {HeaderMenu};