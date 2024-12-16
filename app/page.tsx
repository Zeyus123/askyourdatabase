"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    // Fetch the iframe URL from the API
    fetch("/api/ayd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(({ url }) => {
        setIframeUrl(url);
      });

    // Cleanup to reset any side effects if needed
    return () => {
      setIframeUrl("");
    };
  }, []);

  return (
    <main style={{ overflowX: "hidden", overflowY: "hidden" }}>

      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#2a2a2a",
          color: "white",
          width: "100%", // Ensure full-width header
          padding: "1rem",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          borderBottom: "1px solid #333",
          position: "fixed", // Keep the header fixed at the top
          top: 0,
          zIndex: 1000,
        }}
      >
        HED GPT
      </div>

      {/* Chatbot Iframe */}
      <iframe
        className="mx-auto"
        style={{
          height: "calc(100vh - 4rem)", // Adjust for the header height
          width: "80%", // Use full-width for the iframe
          border: "none",
          marginTop: "4rem", // Prevent overlapping with the fixed header
        }}
        src={iframeUrl}
        title="Chatbot"
      ></iframe>
    </main>
  );
}
