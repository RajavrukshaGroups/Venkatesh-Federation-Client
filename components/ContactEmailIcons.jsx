import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactEmailIcons = () => {
  const phoneNumbers = ["+91 98184 07442", "+91 98451 05338"];
  const emailAddress = "aitifservices@gmail.com";
  const [showPhones, setShowPhones] = useState(false);

  const togglePhoneList = () => setShowPhones(!showPhones);

  const handleEmailClick = () => window.location.href = `mailto:${emailAddress}`;

  return (
    <div style={{
      position: "fixed",
      bottom: "100px",
      right: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      zIndex: 1000,
      fontFamily: "Arial, sans-serif",
    }}>
      {/* Phone Icon */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button
          onClick={togglePhoneList}
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(135deg, #28a745, #1c7c31)",
            color: "#fff",
            fontSize: "22px",
            cursor: "pointer",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            //transition: "transform 0.2s, box-shadow 0.2s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          title="Call Us"
        >
          <FontAwesomeIcon icon={faPhone} />
        </button>

        {/* {showPhones && (
          <div style={{
            marginTop: "10px",
            //backgroundColor: "#ffffff00",
            color: "#000",
            padding: "1px 2px",
            borderRadius: "10px",
            //boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
            textAlign: "center",
            animation: "fadeIn 0.3s ease-in-out",
          }}>
            {phoneNumbers.map((num, i) => (
             <a
  key={i}
  href={`tel:${num.replace(/\s+/g, "")}`}
  style={{
    display: "block",
    margin: "1px 0",
    color: "#28a745",
    textDecoration: "none", // no underline initially
    fontWeight: "600",
    padding: "2px 4px",
    borderRadius: "6px",
    //transition: "all 0.2s ease-in-out",
  }}
  onMouseEnter={(e) => {
    //e.currentTarget.style.backgroundColor = "#126bc4";
    e.currentTarget.style.color = "#2947d9";
    //e.currentTarget.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.3)";
    e.currentTarget.style.textDecoration = "underline"; // add underline on hover
  }}
  onMouseLeave={(e) => {
    //e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#28a745";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.textDecoration = "none"; // remove underline when not hovered
  }}
>
  {num}
</a>
            ))}
          </div>
        )} */}
        {showPhones && (
        <div
            style={{
            position: "absolute",        // <-- key fix
            bottom: "65px",              // place above the button
            right: "50%",                // center horizontally
            transform: "translateX(50%)",
            //backgroundColor: "#ffffff",
            color: "#000",
            padding: "5px 8px",
            borderRadius: "10px",
            textAlign: "center",
            minWidth: "130px",
            //boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
            zIndex: 1000,
            }}
        >
            {phoneNumbers.map((num, i) => (
            <a
                key={i}
                href={`tel:${num.replace(/\s+/g, "")}`}
                style={{
                display: "block",
                margin: "2px 0",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: "600",
                padding: "2px 4px",
                // borderRadius: "6px",
                backgroundColor: "#00152b",
                transition: "all 0.2s ease-in-out",
                fontSize: "13px",
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2947d9";
                e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.textDecoration = "none";
               e.currentTarget.style.backgroundColor = "#00152b";
                }}
            >
                {num}
            </a>
            ))}
        </div>
        )}
      </div>

      {/* Email Icon */}
      <button
        onClick={handleEmailClick}
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(135deg, #17a2b8, #0f6674)",
          color: "#fff",
          fontSize: "22px",
          cursor: "pointer",
          //boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
          transition: "transform 0.2s, box-shadow 0.2s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        title="Email Us"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};

export default ContactEmailIcons;