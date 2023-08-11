import './Header.css';

import React, {FC} from 'react';

import {HeaderLinks} from '../HeaderLinks/HeaderLinks';
import {HeaderLogo} from '../HeaderLogo/HeaderLogo';
import {HeaderMenu} from '../HeaderMenu/HeaderMenu';

const Header: FC = () => {
   return (
      <div className={'header'}>

         <div className={'headerMenu'}>
            <HeaderLogo/>
            <HeaderMenu/>
            <HeaderLinks/>
         </div>

      </div>
   );
};

export {Header};