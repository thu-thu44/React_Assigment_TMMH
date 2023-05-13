import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CImg,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CRow,
  CCol,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import moment from "moment";
// routes config
import routes from "../routes";
import { useHistory } from "react-router-dom";
import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from "./index";

const TheHeader = () => {

  //useDispatchက stateတစ်ခုရဲ့အခြေအနေကို updateလုပ်ပေးတာပါ။
  const dispatch = useDispatch();

  const [realTime, setRealTime] = useState("");
  const [date, setDate] = useState("");

  //ဒါကsidebarShow ရဲ့ currentလက်ရှိအခြေအနေကိုဖော်ပြပေးတဲ့ variable
  const sidebarShow = useSelector((state) => state.sidebarShow);
  let history = useHistory();

  useEffect(() => {
    //objectတစ်ခုဆောက်လိုက်တယ်
    let today = new Date();
    const n = today.toDateString();
    setDate(n);
  }, []);

  //visibility of toggle ->ခလုတ်မြင်နိုင်မှုနဲ့ပတ်သတ်တဲ့codeပါ။toggleSidebarကို const arrow functionအဖြစ်သတ်မှတ်လိုက်တယ်။
  const toggleSidebar = () => {

    //sidebarShowရဲ့current valueအပေါ်မူတည်ပြီး စတဲ့ variableကိုသတ်မှတ်တယ်။
    //[true, "responsive"].includes(sidebarShow)က sidebarShowရဲ့ current valueက true ဒါမှမဟုတ် responsiveဖြစ်နေလားကိုစစ်တယ်။
    //တကယ်လို့ အဲ့ထဲကတစ်ခုခုဖြစ်နေမယ်ဆိုရင် val ကို falseလုပ်ပေးပါမယ်။ မဖြစ်နေရင် responsiveလုပ်ပေးပါမယ်။
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";

      //dispatch functionကို argument ရှိတဲ့ objectအနေနဲ့ခေါ်လိုက်ပါတယ်။
      //propterties ၂ မျိုးရှိပြီး၊ type, sidebarShow
      //type ကို set ထားပြီး sidebarShow ကို val ထားလိုက်ပါတယ်။
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  let time = moment().format("h:mm:ss A");
  setInterval(() => {
    time = moment().format("h:mm:ss A");
    setRealTime(time);
  }, 1000);





  return (
    <CHeader withSubheader>
       <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <h2>Managment System</h2>
       </CHeaderBrand>

      {/* <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav> */}

      {/* <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdown />
      </CHeaderNav>  */}

      <CSubheader className="px-3 ">
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none "
          onClick={toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={toggleSidebar}
        />
        
        <div className="d-md-down-none mfe-2 c-subheader-nav ">
          <CRow
            className="c-subheader-nav-link"
            style={{ position: "absolute", right: 0, marginRight: "3px" }}
          >
            
            <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
            />
            
            
             <CCol
              style={{
                minWidth: "15rem",
                color: "white",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "15px",
                boxShadow: "1px 2px 4px 0px",
                background: "#455261",
              }}
            >
              {date}&nbsp; &nbsp; {realTime}
            </CCol> 
         
            {/* <CCol
             style={{
              minWidth: "10rem",
              marginTop: "10px",
              color: "black",
              fontWeight: "bold"
             }}
            >
              <CLabel>
                {date} <br></br>{time}
              </CLabel>
            </CCol> */}
            
  
          </CRow>

          {/* <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard"
          >
            <CIcon name="cil-graph" alt="Dashboard" />
            &nbsp;Dashboard
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Settings
          </CLink>  */}
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
