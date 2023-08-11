import React, {Component} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {MainLayout} from './layouts';
import {HomePage} from './pages';

class App extends Component {
   render() {
      return (
         <Routes>
            <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<Navigate to={'HomePage'}/>}/>
               <Route path={'HomePage'} element={<HomePage/>}/>
            </Route>
         </Routes>
      );
   }
}

export default App;