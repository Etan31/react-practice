import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import "./App.css";

//components
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import InterviewPractice from "./components/InterviewQuestion/Array";

function App() {
  const location = useLocation();

  return (
      <Fragment>
        <div className="container">
          { location.pathname === '/'  && (
            <Link to="/interview"><button className="interviewBtn">Practice Interview</button></Link>
          )}
          { location.pathname === '/interview' && (
            <Link to='/'> <button className="BackBtn">Back</button> </Link>  
          )}


          <Routes>
            <Route path="/" element={<><InputTodo /><ListTodo /></>} />
            <Route path="/interview" element={<InterviewPractice />} />
          </Routes>
        </div>
      </Fragment>
  );
}

function AppWrapper() {
  return(
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;