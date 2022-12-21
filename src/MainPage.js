import React from "react";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin  ,GoogleOAuthProvider} from "@react-oauth/google";
const MainPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <div>
      <h1>kdkffkfkfk</h1>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GoogleLogin
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
