import React, { useState } from "react";

export const Home = ({ shortenedUrls, onShorten, onSave }) => {
  const [originalUrl, setOriginalUrl] = useState("");

  const handleChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const handleShorten = () => {
    onShorten(originalUrl);
    setOriginalUrl(""); // Reset input field after shortening
  };

  const handleCopy = (urlToCopy) => {
    navigator.clipboard.writeText(urlToCopy)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Home</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={originalUrl}
        onChange={handleChange}
        style={{ width: "400px", height: "40px", fontSize: "16px", marginBottom: "20px" }}
      />
      <br />
      <button onClick={handleShorten} style={{ width: "200px", height: "40px", fontSize: "16px" }}>
        Shorten it
      </button>
      <div style={{ marginTop: "20px", fontSize: "14px", textAlign: "left" }}>
        {shortenedUrls.map((url, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              Original URL: <span>{url.original}</span>
            </p>
            <p>
              Shortened URL: <span>{url.shortened}</span>
              <button style={{ marginLeft: "10px" }} onClick={() => handleCopy(url.shortened)}>Copy</button>
              <button style={{ marginLeft: "10px" }} onClick={() => onSave(url)}>Save</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
