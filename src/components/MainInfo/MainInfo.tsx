import './MainInfo.css';

import React, {FC} from 'react';

import me from '../../assets/images/me.png';

const MainInfo: FC = () => {
   return (
      <div>
         <h1 content={'WELCOME'}>
                WELCOME
         </h1>
         <img src={me} alt="Valentyn Strukalo"/>
      </div>
   );
};

export {MainInfo};