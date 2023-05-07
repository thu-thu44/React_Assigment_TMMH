import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import { checkNullOrBlank,checkP } from "../common/CommonValidation";
import Loading from "../common/Loading";
import { ApiRequest } from "../common/ApiRequest";
import LoginForm from "./LoginForm";

const LoginIndex = () => {
  const history = useHistory();

  //useStates
  const [usercode, setUserCode] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState([]);
  const [error,setError] = useState([]);
  const [loading,setLoading] = useState(false);

  let err = [];

  //functions
  const userCodeChange = (e) =>{
    setUserCode(e.target.value);
  }

  const passwordChange = (e) =>{
    setPassword(e.target.value)
  }

  //function of login click
  const loginClick = () => {
    setLoading(true);
    if(!checkNullOrBlank(password)){
      err.push("Please fill password!!");
    }
    if(!checkNullOrBlank(usercode)){
      err.push("Please fill userCode!!");
    }

    if(err.length > 0){
      setSuccess([]);
      setError(err);
    }
    else{
      setError([]);
    }

    //Link with Backend
    let SaveData = {
      method : "get",
      url:`admin\login`,
      params :{
        user_code: usercode,
        password: password
      },
    };

    let response = ApiRequest(SaveData);
    if(response.flag === false){
      setError(response.message);
      setSuccess([]);
      window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    else{
      if(response.data.status =="OK"){
        window.scrollTo({top:0,left:0,behavior:"smooth"})
        history.push(`Dashboard`)
        localStorage.setItem(`LoginProcess`,"true");
        setError([]);
      }
      else{
        setError([response.data.message])
        setSuccess([]);
        window.scrollTo({top:0, left:0, behavior:"smooth"})
      }
    }
  }

  //return
  return(
    <>
    <LoginForm
    loginClick={loginClick}
    passwordChange={passwordChange}
    password={password}
    userCodeChange={userCodeChange}
    usercode={usercode}
    success={success}
    error={error}
    />
    <Loading start={loading}/>
    </>
  )
}

export default LoginIndex