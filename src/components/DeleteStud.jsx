import React from 'react'
import NaviBar from './NaviBar'

const DeleteStud = () => {
  return (
    <div>
        <NaviBar/>
        <div className="container">
             <h2 className="text-center mb-4" style={{color:'#77DD77'}}><u> Delete Student Details❌</u></h2>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row">
                        <div className="col col-12-col-sm-12 col md-12 col lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label">Admission number:</label>
                        <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12-col-sm-12 col md-12 col lg-12 col-xl-12 col-xxl-12">
                            
                            <button className="btn btn-success">Delete</button>


                             </div>
                    </div>


                </div>
            </div>
        </div>


    </div>
  )
}

export default DeleteStud