import React from 'react';
import './App.css';
import DateTime from './components/DateTime'
import Calendar from 'react-calendar';
import Time from  './components/TimePicker'
import './App.css'

function App() {

return (

  <div> 

    <DateTime >
<Calendar />
     </DateTime>

     <Time/> 
</div>

   
  );
}

export default App;
