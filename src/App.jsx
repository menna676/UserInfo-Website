import React, { useState, useEffect } from "react";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Landing from "./assets/Components/Landing";
import Home from "./assets/Components/Home";
import Users from "./assets/Components/Users";
import Contact from "./assets/Components/Contact";

import "./assets/Styles/global.css";
import "./assets/Styles/App.css";

import "./App.css";

// rest of your App component code...

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setCurrentPage("users");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "landing":
        return <Landing onGetStarted={() => handlePageChange("home")} />;
      case "home":
        return (
          <Home
            users={users}
            loading={loading}
            onUserSelect={handleUserSelect}
          />
        );
      case "users":
        return (
          <Users user={selectedUser} onBack={() => handlePageChange("home")} />
        );
      case "contact":
        return <Contact />;
      default:
        return <Landing onGetStarted={() => handlePageChange("home")} />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="main-content">{renderCurrentPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
