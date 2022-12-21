import React from "react";
import { GoogleLogin } from "react-google-login";
const MainPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  console.log(process.env.REACT_APP_CLIENT_ID)
  return (
    <div>
        <h1>kdkffkfkfk</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default MainPage;
