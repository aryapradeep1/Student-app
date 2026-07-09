import React from 'react'
import './Viewstud.css'
import NaviBar from './NaviBar'

const ViewStud = () => {
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
      <th scope="col">Deatils</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">3509</th>
      <td>Arun</td>
      <td>XII</td>
      <td><a href=''>Details</a></td>
    </tr>
    <tr>
      <th scope="row">2098</th>
      <td>Jacob</td>
      <td>VII</td>
      <td><a href=''>Details</a></td>
    </tr>
    <tr>
      <th scope="row">3436</th>
      <td>John</td>
      <td>I</td>
      <td><a href=''>Details</a></td>
    </tr>
     <tr>
      <th scope="row">3436</th>
      <td>John</td>
      <td>I</td>
      <td><a href=''>Details</a></td>
    </tr>
     <tr>
      <th scope="row">3496</th>
      <td>Aohn</td>
      <td>II</td>
      <td><a href=''>Details</a></td>
    </tr>
     <tr>
      <th scope="row">8936</th>
      <td>John</td>
      <td>III</td>
      <td><a href=''>Details</a></td>
    </tr>
  </tbody>
</table>



            </div>
        </div>
       </div>



    </div>
  )
}

export default ViewStud