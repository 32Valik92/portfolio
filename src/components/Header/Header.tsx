import './Header.css';

import React, {FC, useState} from 'react';

import {HeaderLinks} from '../HeaderLinks/HeaderLinks';
import {HeaderLogo} from '../HeaderLogo/HeaderLogo';
import {HeaderMenu} from '../HeaderMenu/HeaderMenu';

const Header: FC = () => {
   const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
   // const [isMenuHidden, setIsMenuShowHidden] = useState<boolean>(false);
   const toggleMenu = (): void => {
      setIsMenuShow(!isMenuShow);
   };


   return (
      <div className={'header'}>

         <div className={'headerMenu'}>
            <HeaderLogo/>
            <div className={'mediaMenu'}>
               <button onClick={toggleMenu}>MENU</button>
            </div>
            <HeaderMenu isMenuShow={isMenuShow} setIsMenuShow={setIsMenuShow}/>
            <HeaderLinks isMenuShow={isMenuShow}/>
         </div>

      </div>
   );
};

export {Header};