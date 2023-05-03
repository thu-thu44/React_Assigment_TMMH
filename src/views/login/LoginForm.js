import React from "react";
import { CCard, CCardBody, CBody, CCol, CRow, CImg, CLabel, CInputGroup, CInputGroupPrepend, CInputGroupText, CInput, CButton } from "@coreui/react";
import SuccessError from '../common/SuccessError';

const LoginForm = (props) => {
  let { loginClick, passwordChange, password,
    userCodeChange, usercode, success, error } = props;

  return (
    <div className="min-vh-100 flex-row align-items-center login-bg">
      <CRow>
        <CCol lg="3"></CCol>
        <CCol lg="6">
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
                    <CInput className="login-input" placeholder='Enter user Code' type='text'
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
                    <CInput className="login-input" placeholder='Enter your password' type="password"
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
  )
}

export default LoginForm