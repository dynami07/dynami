import React from 'react';

var date= ()=> 
{
  var showdate= new Date();
  vardisplaytodaysdate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
  return(
    <div>
      <input type="text" value= {displaytodaydate} readonly="true"/>
   </div>
);
}

export default date;
