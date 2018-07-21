
import React from 'react'
import { withRouteData, Link } from 'react-static'


export default withRouteData((({mydata, mydata2}) => {
  console.log(mydata, mydata2);
  return (
    <div>
      <h1>Route Info Below</h1>
      <h2>mydata</h2>
      <code>{JSON.stringify(mydata)}</code>
      <h2>mydata2</h2>
      <code>{JSON.stringify(mydata2)}</code>
      {/* <h2>routeInfo</h2>
      <code>{JSON.stringify(routeInfo)}</code> */}
    </div>
  );
}));
