

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./home/Home";


// এভাবে ইম্পোর্ট করলে ডায়নামিক ভাবে এই কম্পোনেন্ট গুলাই রেন্ডার হবে আর বাকি স্ট্যাটিক পেজ গুলো বার বার ডাউনলোড হবে না । এদিক দিয়ে এভাবে করলে সাইট কিছুটা অপটিমাইজড হয়ে থাকে । 
const Home = React.lazy(() => import("./home/Home"))




const Main = () => {
    return (
        <div>
            {/* <Home></Home> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div >
    );
};

export default Main;