import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App: React.FC = () => {
  return (
   <BrowserRouter>
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserForm />} />
      </Routes>
    </div>
   </BrowserRouter>
  );
};

export default App;
