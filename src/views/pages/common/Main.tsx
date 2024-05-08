

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./home/Home";


// এভাবে ইম্পোর্ট করলে ডায়নামিক ভাবে এই কম্পোনেন্ট গুলাই রেন্ডার হবে আর বাকি স্ট্যাটিক পেজ গুলো বার বার ডাউনলোড হবে না । এদিক দিয়ে এভাবে করলে সাইট কিছুটা অপটিমাইজড হয়ে থাকে । 
// if anyone use lazy thn must be use <suspense>
const Home = React.lazy(() => import("./home/Home"))




const Main = () => {
    return (
        <div className="container mx-auto">
            {/* <Home></Home> */}
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/product/:id" element={{}} /> */}
                </Routes>
            </Suspense>
        </div >
    );
};

export default Main;