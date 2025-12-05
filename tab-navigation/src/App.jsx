import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="container">
      <h1>Tab Navigation</h1>

      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={activeTab === "home" ? "tab active" : "tab"}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>

        <button
          className={activeTab === "about" ? "tab active" : "tab"}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>

        <button
          className={activeTab === "contact" ? "tab active" : "tab"}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      {/* Tab Content */}
      <div className="content">
        {activeTab === "home" && <p>Welcome to the Home tab!</p>}
        {activeTab === "about" && <p>This is a simple tab navigation demo.</p>}
        {activeTab === "contact" && <p>Contact us at: example@email.com</p>}
      </div>
    </div>
  );
}

export default App;