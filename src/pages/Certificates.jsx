import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Python Basic",
      org: "HackerRank",
      date: "2023",
      img: "/certs/python-basic.pdf.png",
      link: "/certs/python-basic.pdf",
    },
    {
      title: "SQL Intermediate",
      org: "HackerRank",
      date: "2023",
      img: "/certs/sql-intermediate.pdf.png",
      link: "/certs/sql-intermediate.pdf",
    },
    {
      title: "SQL Advanced",
      org: "HackerRank",
      date: "2023",
      img: "/certs/sql-advanced.pdf.png",
      link: "/certs/sql-advanced.pdf",
    },
    {
      title: "Power BI",
      org: "Microsoft",
      date: "2023",
      img: "/certs/powerbi.pdf.png",
      link: "/certs/powerbi.pdf",
    },
    {
      title: "Google Cloud",
      org: "Google",
      date: "2023",
      img: "/certs/google-cloud.pdf.png",
      link: "/certs/google-cloud.pdf",
    },
    {
      title: "Quantium Data Analytics",
      org: "Quantium",
      date: "2023",
      img: "/certs/quantium.pdf.png",
      link: "/certs/quantium.pdf",
    },
  ],
  other: [
    {
      title: "Edulyt Internship",
      org: "Edulyt India",
      date: "2023",
      img: "/certs/edulyt-internship.pdf.png",
      link: "/certs/edulyt-internship.pdf",
    },
    {
      title: "Offer Letter",
      org: "Edulyt India",
      date: "2023",
      img: "/certs/edulyt-offer-letter.png",
      link: "/certs/edulyt-offer-letter.png",
    },
    {
      title: "Data Visualization",
      org: "Tata (Forage)",
      date: "2023",
      img: "/certs/tata-forage.pdf.png",
      link: "/certs/tata-forage.pdf",
    },
    {
      title: "Accenture Job Sim",
      org: "Accenture",
      date: "2023",
      img: "/certs/accenture.pdf.png",
      link: "/certs/accenture.pdf",
    },
    {
      title: "Cognizant Job Sim",
      org: "Cognizant",
      date: "2023",
      img: "/certs/cognizant.pdf.png",
      link: "/certs/cognizant.pdf",
    },
    {
      title: "BCG Strategy",
      org: "Boston Consulting Group",
      date: "2023",
      img: "/certs/bcg-forage.pdf.png",
      link: "/certs/bcg-forage.pdf",
    },
    {
      title: "Software Engineering",
      org: "JP Morgan",
      date: "2023",
      img: "/certs/jpmorgan.pdf.png",
      link: "/certs/jpmorgan.pdf",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                    objectPosition: "center",
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ width: "90%", height: "90%", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              {selectedCert.link.endsWith('.pdf') ? (
                <iframe
                  src={selectedCert.link}
                  title={selectedCert.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    border: "none",
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                    background: "white"
                  }}
                />
              ) : (
                <motion.img
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: 10,
                    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
