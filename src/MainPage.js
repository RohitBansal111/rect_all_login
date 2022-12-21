import React from "react";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin ,GoogleOAuthProvider    ,useGoogleLogin} from "@react-oauth/google";
const MainPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
//   const login = useGoogleLogin({
//     onSuccess: codeResponse => console.log(codeResponse),
//     flow: 'auth-code',
//   });

  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <div>
      <h1>kdkffkfkfk</h1>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <GoogleLogin
        allowed_parent_origin="http://localhost:3000/"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={(credentialResponse) => {
            console.log("Login Failed");
            console.error(credentialResponse);
          }}
        />
      
      </GoogleOAuthProvider>
      
      {/* <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /> */}
    </div>
  );
};

export default MainPage;
