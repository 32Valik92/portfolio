import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {Footer, Header} from '../components';
const MainLayout: FC = () => {
   return (
      <div>
         <Header/>
         <Outlet/>
         <Footer/>
      </div>
   );
};

export {MainLayout};