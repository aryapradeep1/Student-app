import React, { useState } from 'react'
import './Viewstud.css'
import NaviBar from './NaviBar'

const ViewStud = () => {

    const[data,changeData]=useState(
      [
        {"admnumber":"2031","name":"arya","class":"xII","Grade":"A+"},
        {"admnumber":"2034","name":"archana","class":"xII","Grade":"A"},
        {"admnumber":"2028","name":"ananya","class":"xII","Grade":"B+"},
        {"admnumber":"4407","name":"Akhil","class":"xII","Grade":"c+"},
         {"admnumber":"2031","name":"arya","class":"xII","Grade":"A+"},
        {"admnumber":"2034","name":"archana","class":"xII","Grade":"A"},
        {"admnumber":"2028","name":"ananya","class":"xII","Grade":"B+"},
        {"admnumber":"4407","name":"Akhil","class":"xII","Grade":"c+"},
         {"admnumber":"2031","name":"arya","class":"xII","Grade":"A+"},
        {"admnumber":"2034","name":"archana","class":"xII","Grade":"A"},
        {"admnumber":"2028","name":"ananya","class":"xII","Grade":"B+"},
        {"admnumber":"4407","name":"Akhil","class":"xII","Grade":"c+"},
        
      ]
    )

  return (
    <div>
        <NaviBar/>
       <div className="container">
        <h2 className="text-center mb-4" style={{color:'#77DD77'}}><u>Student Details </u>👩🏻‍💻📓✍🏻💡</h2>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            
             <table className="table table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">Ad.number</th>
      <th scope="col">Name</th>
      <th scope="col">class</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
      (value,index)=>{
          return(
                <tr>
          <th scope="row">{value.admnumber}</th>
          <td>{value.name}</td>
         <td>{value.class}</td>
         <td>{value.Grade}</td>

    </tr>
          )
      }
    )}
          
  </tbody>
</table>



            </div>
        </div>
       </div>



    </div>
  )
}

export default ViewStud