import React from "react";
import "../styles/errorPage.css"; 

function ErrorPage() {
  const goBack = () => {
    window.history.back(); 
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">
          We couldn&apos;t find the page you&apos;re looking for.
        </p>
        <button className="error-button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
