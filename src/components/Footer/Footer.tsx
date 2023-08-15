import './Footer.css';

import React, {FC} from 'react';

const Footer: FC = () => {
   return (
      <footer className="footer">
         <div className="container">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
         </div>
      </footer>
   );
};

export {Footer};