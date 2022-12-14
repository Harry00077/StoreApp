import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import AuthProtected from "./protectedroutes/AuthProtected";
import SignInRoute from "./protectedroutes/SignInRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <AuthProtected>
              <Cart />
            </AuthProtected>
          }
        />
        <Route
          path="/signin"
          element={
            <SignInRoute>
              <SignIn />
            </SignInRoute>
          }
        />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </>
  );
}

export default App;
