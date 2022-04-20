import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Patient } from './CreatePatient';

import { Sidebar } from './Sidebar'


export const CalendarScreen = () => {
    return(  
      <div className="">
            <div className="">
               <Sidebar/>
               <Router>
               <Switch>
                    <Route  path ="/patient" component={ Patient } />
                </Switch>
               </Router>
               
            </div>
        </div>
  );

  
}

 // <div className='journal__main-content'>
// <Sidebar/>
// <main>
 //  <h1>hellowww</h1>
// </main>
//</div>
//)

