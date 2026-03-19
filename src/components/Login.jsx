import React from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    // const nav=useNavigate();
    // const goTohome=()=>{
    //     nav("/home")
    // }
  return (
    <>
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor="">Voter id</label>
                <input type="text" />
            </div>
            <div>
                <input type="submit" value={"Login"}/>
            </div>
        </div>
    </>
  )
}

export default Login