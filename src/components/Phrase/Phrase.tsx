import './Phrase.css';

import React, {FC} from 'react';

const Phrase: FC = () => {
   return (
      <div className={'phrase'}>
         <span style={{color: 'orange'}}>const </span>
            phrase = <span style={{color: 'green'}}> {'"If you can dream it, you can do it"'}</span>
         <span style={{color: 'orange'}}>;</span>
      </div>
   );
};

export {Phrase};