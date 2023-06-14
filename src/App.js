import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Theaters from "./components/Theaters";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";

function App() {
  const [mailId, setMailId] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://zincubate.in/api/MovieTicketChecker?action=getAllDetails&user_mail_id=${mailId}`,
        {
          method: "POST",
        }
      );
      const json = await response.json();
      setData(json);
    }
    if (mailId) fetchData();
  }, [mailId]);

  return (
    <div className="App">
      <Navbar setAppMailId={setMailId} />
      {!mailId && <Alert />}
      {Object.keys(data).length > 0 && (
        <Routes>
          <Route path="/" element={<Theaters data={data} />} />
          <Route
            path="/:movieDetails"
            element={<Movie data={data} userMailId={mailId} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
