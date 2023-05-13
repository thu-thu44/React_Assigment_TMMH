import React,{useEffect, useState} from "react";
import { CCard, CCardBody, CBody, CCol, CRow, CImg, CLabel, CInputGroup, CInputGroupPrepend, CInputGroupText, CInput, CButton, CCardHeader } from "@coreui/react";
import SuccessError from '../common/SuccessError';
import $ from "jquery";



const LoginForm = (props) => {
  let { loginClick, passwordChange, password,
    userCodeChange, usercode, success, error } = props;

    const [zoomSize,setZoomSize] = useState(
      Math.round(window.devicePixelRatio) * 100
    );

  useEffect(() => {
      $(window).resize(function () {
        setZoomSize(Math.round(window.devicePixelRatio * 100));
      });
    }, []);

    // For Pressing Enter and login
    const keyDownHandler = (e) =>{
      if(e.key == "Enter"){
        loginClick();
        e.preventDefault(); //to avoid blank page from error
      }
    }

  return (
    <>
    {/* For Laptop and desktop */}
    {zoomSize < 150 && (
    <div className="min-vh-100 flex-row align-items-center login-bg">
      <CRow>
        <CCol lg="2"></CCol>
        <CCol lg="8">
          <CCard className="login" style={{ marginTop: "100px" }}>
            <CCardBody alignHorizontal="center">
              <CRow alignHorizontal="center">
                <CImg src='./image/logo-icon.png' width={100} height={100}></CImg>
              </CRow>

              <CRow alignHorizontal="center" className="mb-3">
                <h3 className="login-title">Registration System</h3>
              </CRow>
              <SuccessError success={success} error={error} />

              {/* Usercode in login */}
              <CRow className="mt-4 align-items-center">
                <CCol lg="4"><CLabel className="form-label">User Code</CLabel></CCol>
                <CCol lg="8">
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src="./image/user.png" width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onKeyDown={keyDownHandler} className="login-input" placeholder='Enter user Code' type='text'
                      autoFocus value={usercode} onChange={userCodeChange}>
                    </CInput>
                  </CInputGroup>
                </CCol>
              </CRow>

              {/* Password in login */}
              <CRow className='mt-4 align-items-center'>
                <CCol lg='4'><CLabel className='form-label'>Password</CLabel></CCol>
                <CCol lg="8">
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src="./image/password.png" width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onKeyDown={keyDownHandler} className="login-input" placeholder='Enter your password' type="password"
                    autoFocus value={password} onChange={passwordChange}>
                    </CInput>
                  </CInputGroup>
                </CCol>
              </CRow>

              <br></br>
              <br></br>
              {/* Login Button */}
              <CRow alignHorizontal="center" className='mb-4'>
                <CButton id="login" className='form-btn login-btn' onClick={loginClick}>Login</CButton>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )}

{/* For phone and small screen size devices */}
{zoomSize >= 150 && (
  <div className="min-vh-100 flex-row align-items-center login-bg-ph">
    <CRow>
      <CCol lg="2"></CCol>
      <CCol lg="8">
        <CCard className="login" style={{marginTop:"3.5rem"}}>
          <CCardBody alignHorizontal="center">
            <CRow alignHorizontal="center">
              <CImg src="./image/logo-icon.png" width={50} height={50}></CImg>
            </CRow>
            <CRow alignHorizontal="center" className="mb-3">
                <h3 className="login-title-ph">Registration System</h3>
              </CRow>
              <SuccessError success={success} error={error} />

              {/* Usercode in login */}
              <CRow className="mt-4 align-items-center">
                <CLabel className="form-label-ph">User Code</CLabel>
                </CRow>
                <CRow>
                <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src="./image/user.png" width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput className="login-input" placeholder='Enter user Code' type='text'
                      autoFocus value={usercode} onChange={userCodeChange}>
                    </CInput>
                  </CInputGroup>
              </CRow>

              {/* Password in login */}
              <CRow className="mt-4 align-items-center">
                <CLabel className="form-label-ph">Password</CLabel>
                </CRow>
                <CRow>
                <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src="./image/user.png" width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput className="login-input" placeholder='Enter user Code' type='password'
                      autoFocus value={password} onChange={passwordChange}>
                    </CInput>
                  </CInputGroup>
              </CRow>

              <br></br>
              <br></br>
              {/* Login Button */}
              <CRow alignHorizontal="center" className='mb-4'>
                <CButton id="login" className='form-btn login-btn' onClick={loginClick}>Login</CButton>
              </CRow>


          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  
  </div>
  )}
  </>
  )
}
export default LoginForm