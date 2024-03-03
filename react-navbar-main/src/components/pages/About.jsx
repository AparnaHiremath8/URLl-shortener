// import React from "react";

// export const About = () => {
//   return <h1>About</h1>;
// };
import React from "react";

export const About = ({ savedUrls }) => {
  return (
    <div>
      
      <h2>Saved URLs:</h2><br></br>
      <ul>
        {savedUrls.map((url, index) => (
          <li key={index}>
            <span>{url.original}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
