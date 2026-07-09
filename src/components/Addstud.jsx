import React from 'react'
import NaviBar from './NaviBar'

const Addstud = () => {
  return (
    <div>
        <NaviBar/>
        <div className="container">
             <h2 className="text-center mb-4" style={{color:'#77DD77'}}><u> Add Student Details 👨🏻‍🎓</u></h2>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg 12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                               <label htmlFor="" className="form-label">Admission number:</label>
                               <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                 <label htmlFor="" className="form-label">Full name:</label>
                               <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                 <label htmlFor="" className="form-label">Date of birth:</label>
                               <input type="date" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender</label><br></br>
                                Male<input type="radio" name="gender" id="" />
                                Female<input type="radio" name="gender" id="" />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Class:</label>
                               <input type="date" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Section</label>
                               <input type="date" className="form-control" />





                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Parent/Guardian name:</label>
                               <input type="date" className="form-control" />




                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Contact number:</label>
                               <input type="date" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email:</label>
                               <input type="date" className="form-control" />




                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Address:</label>
                               <textarea name="" id="" className="form-control" placeholder='🏠'></textarea>



                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">Submit</button>


                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Addstud