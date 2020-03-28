import React from 'react'
import { getTheme } from "react-uwp";
import { Fruit } from '../fruits';


const DetailsContent: React.SFC<{ fruit: Fruit }> = ({ fruit }) => {
  const theme = getTheme();
  
  return (
    <div className="fruit-detail">
      {fruit ?
        <div>
          <h1 style={theme.typographyStyles?.header}>Detail of {fruit.name}</h1>
          <br />
          <h3 style={theme.typographyStyles?.subTitle} >Name: {fruit.name}</h3>
          <br />
          <h3 style={theme.typographyStyles?.subTitle} >Color: {fruit.color}</h3>
          <br/>
          <p style={theme.typographyStyles?.body} >{fruit.description}</p>
        </div>

        :
        <h1 style={theme.typographyStyles?.header}>Select a fruit from the list</h1>
      }
    </div>

  )
}

export default DetailsContent