import './Welcome.css';

import React, {FC} from 'react';

import me from '../../assets/images/me.png';

const Welcome:FC = () => {
   return (
      <div className={'welcome'}>
         <h1 content={'WELCOME'}>
                WELCOME
         </h1>
         <img src={me} alt="Valentyn Strukalo" className={'welcomeImg'}/>
      </div>
   );
};

export {Welcome};