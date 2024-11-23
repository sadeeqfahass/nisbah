import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Houses from "../components/Merchant/Houses";
import IndexMerchant from "../components/Merchant/IndexMerchant";
import Listings from "../components/Merchant/Listings";
import Post from "../components/Merchant/Post";
import Request from "../components/Merchant/Request";
import Statistics from "../components/Merchant/Statistics";
import Reviews from "../components/Merchant/Reviews";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Home from "../components/LandingPage/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />

      <Route path="/merchant" element={<IndexMerchant />}>
        <Route path="listings" element={<Listings />}/>
        <Route path="houses" element={<Houses />}/>
        <Route path="post" element={<Post />}/>
        <Route path="request" element={<Request />}/>
        <Route path="statistics" element={<Statistics />}/>
        <Route path="reviews" element={<Reviews />}/>
      </Route>

      <Route path="/signup" element={<Signup />} index />
      <Route path="/login" element={<Login />} index />

    </Routes>
  );
}

export default Router;
