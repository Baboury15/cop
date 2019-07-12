import React, { useState, useEffect} from 'react';

function Time () {
  const [time, setTime] = useState([]);
 
  useEffect( () => {
    console.log(time)

  })

  const  handleChange  = (e)=> {

  if (e.target.checked){
    const  newTime = [...time , e.target.value]
    setTime (newTime);
    } 
    else {
let remove = time.indexOf(e.target.value)
time.splice(remove, 1) };
   
}
const handleOnclick =(e)=>{
if (e.target.checked){
  const DateChoosen = [...time , e.target.value]
  setTime (DateChoosen );
  } 
  else {
let remove = time.indexOf(e.target.value)
time.splice(remove, 1) };
 

}

 return (
    <div className ="flex-container">
{/* <label > */}

    <div>
    <input className = "checked-1"  onChange = {handleChange} label ="box1"   type="checkbox" value = '7:00AM' /> 
    7:00 AM
    </div>

    <div>
     <input  className = "checked-1"    onChange = {handleChange } type="checkbox"   value ='1:00PM' /> 
    1:00 PM
    </div>

    <div>
    <input className = "checked-1" onChange = {handleChange}    type="checkbox" value ='8:00AM' />
     8:00 AM
     </div>

     <div>
    <input   className = "checked-1" onChange = {handleChange}      type="checkbox" value = '2:00PM' />
     2:00 PM
     </div>

     <div>
    <input   className = "checked-1" onChange = {handleChange}      type="checkbox" value ='9:00AM' />
     9:00 AM
     </div>

     <div>
    <input  className = "checked-1"  onChange = {handleChange}       type="checkbox" value = '3:00PM'/>
     3:00 PM
     </div>

     <div>
     <input className = "checked-1"  onChange = {handleChange}       type="checkbox" value = '10:00AM' />
     10:00 AM
     </div>

     <div>
     <input className = "checked-1"  onChange = {handleChange}       type="checkbox" value = '4:00PM'/>
     4:00 PM
     </div>

     <div>
    <input className = "checked-1"  onChange = {handleChange}       type="checkbox" value = '11:00AM'/>
    11:00 AM
    </div>

    <div>
    <input className = "checked-1"  onChange = {handleChange}       type="checkbox" value = '5:00PM'  />
     5:00 PM
     </div>

     <div>
    <input className = "checked-1"  onChange = {handleChange}       type="checkbox" value = '12:00PM'/>
     12:00 PM
     </div>

     <div>
    <input className = "checked-1"  onChange = {handleChange}       type="checkbox" value = '6:00PM' />
     6:00 PM
     </div>

  



 

{/* </label > */}

<button className ="button"  onClick = { handleOnclick} >Choose this date & time </button>

</div>

  );
}
export default Time;

                      