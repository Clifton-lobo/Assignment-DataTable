import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Sidebarpages/Dashboard";
// import Account from "./components/Sidebarpages/Account";
import Contact from "./components/Sidebarpages/Contact";
import Education from "./components/Sidebarpages/Createprofile/Education";
import Experience from "./components/Sidebarpages/Createprofile/Experience";
import Other from "./components/Sidebarpages/Createprofile/Other";
import Personal from "./components/Sidebarpages/Createprofile/Personal";
import AccLayout from './components/Sidebarpages/AccountLayout/AccLayout'


const App = () => {
  return (
    <Router>
      <Sidebar>
        
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<AccLayout />} />
            {/* <Route path="/account" element={<Account />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/other" element={<Other />} />
          </Routes>
        
      </Sidebar>
      </Router>
  );
};

export default App;
