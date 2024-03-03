// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import { Navbar } from "./components/Navbar";
// import { About, Contact, Home, Services } from "./components/pages";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home as HomePage, Services } from "./components/pages";

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [savedUrls, setSavedUrls] = useState([]);

  const handleShorten = (originalUrl, shortenedUrl) => {
    setShortenedUrls([...shortenedUrls, { original: originalUrl, shortened: shortenedUrl }]);
  };

  const handleSave = (url) => {
    setSavedUrls([...savedUrls, url]);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage
            shortenedUrls={shortenedUrls}
            onShorten={handleShorten}
            onSave={handleSave}
          />}
        />
        <Route path="/about" element={<About savedUrls={savedUrls} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
