import {faV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FC} from 'react';

const HeaderLogo: FC = () => {
   return (
      <div className={'logo'}>
         <FontAwesomeIcon icon={faV} className={'icon'}/> developer
      </div>
   );
};

export {HeaderLogo};