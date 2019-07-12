import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle'


class DateTime extends React.Component {
  state = {
      startDate: new Date()
    };
  

  onChange = startdate =>{

    this.setState({
      startdate : startdate
    })
  }

  render() {
    return (
      <div>

 <p className ="para-0">please select your prefered delivery date: </p> 
 <Calendar className ="calendar"
onChange = {this.onChange}
/>

<p className =" para-1">Please select your prefered delivery times(s): <br/> (We recommend selecting a few for flexibility) </p>


      </div>
    );
  }
}
export default DateTime;



