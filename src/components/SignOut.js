import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../authprovider/AuthProvider";
import "../SignOut.css";

function SignOut() {
  const { handleAuthChange } = useCreateAuthDispatchContext();

  const navigate = useNavigate();
  const handleClick = () => {
    handleAuthChange(false);
    navigate("/");
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        SignOut
      </button>
    </div>
  );
}

export default SignOut;
