import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaChartBar, FaLightbulb, FaRocket, FaCoffee, FaHandshake } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me Container --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.03)",
          padding: "3rem 3rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center"
          }}
        >
          About Me
        </h2>

        {/* --- Intro --- */}
        <p style={{ fontSize: "1.2rem", color: "#ccc", textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
          Hi, I'm <strong>Rohit Poddar</strong> — a Business Analyst who believes that the best business decisions are made when data tells the story.
        </p>

        {/* --- My Journey --- */}
        <Section title="My Journey">
          <p>
            I graduated with a B.Tech from <strong>NIT Rourkela</strong>, where I discovered my passion for turning complex datasets into clear, actionable insights. What started as curiosity about numbers evolved into a career focused on using analytics to solve real-world business challenges.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Today, I work as a Business Analyst at <strong>EXL Service</strong>, partnering with a leading global digital payments platform on their seller risk team. My work sits at the intersection of data, risk, and strategy — where every analysis has the potential to prevent fraud, protect customers, and drive smarter business decisions.
          </p>
        </Section>

        {/* --- What I Do --- */}
        <Section title="What I Do">
          <p style={{ marginBottom: "1.5rem" }}>
            I specialize in risk analytics and data-driven strategy, with a focus on:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <FeatureCard
              icon={<FaSearch size={24} color="var(--accent)" />}
              title="Risk Trend Analysis & Monitoring"
              desc="Analyzing 50,000+ monthly transactions to identify patterns, detect anomalies, and uncover hidden risks before they become problems."
            />
            <FeatureCard
              icon={<FaChartBar size={24} color="var(--accent)" />}
              title="Strategy Development & Implementation"
              desc="Building mitigation strategies that don't just reduce losses, but create sustainable frameworks for long-term risk management."
            />
            <FeatureCard
              icon={<FaLightbulb size={24} color="var(--accent)" />}
              title="Data Visualization & Insights"
              desc="Leveraging SQL, Excel, and Tableau to transform raw data into dashboards and reports that drive real-time decision-making for stakeholders."
            />
          </div>
          <p style={{ marginTop: "2rem", fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", color: "#aaa" }}>
            Through my work, I've helped prevent over <strong>$1 million in potential losses</strong>, reduced chargeback rates by <strong>25%</strong>, and built automated systems that improved reporting efficiency by <strong>40%</strong>.
          </p>
        </Section>

        {/* --- What Drives Me --- */}
        <Section title="What Drives Me">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <p>
                I'm fascinated by the intersection of AI, finance, and business strategy. In a world where data is abundant but insights are rare, I thrive on:
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
                {["Solving complex problems through analytical thinking",
                  "Exploring how emerging technologies like AI and automation are reshaping traditional business models",
                  "Diving deep into case studies that challenge conventional wisdom",
                  "Connecting the dots between numbers and narratives"].map((item, i) => (
                    <li key={i} style={{ marginBottom: "0.8rem", display: "flex", alignItems: "start", gap: "10px" }}>
                      <FaRocket color="var(--accent)" style={{ marginTop: "5px", flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "1rem" }}>
            Beyond the day-to-day, I'm constantly learning — whether it's mastering new BI tools, experimenting with predictive models, or staying ahead of trends in fintech and risk analytics.
          </p>
        </Section>

        {/* --- Beyond Work --- */}
        <Section title="Beyond Work">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaCoffee size={30} color="var(--accent)" style={{ flexShrink: 0 }} />
            <p>
              When I'm not analyzing data, you'll find me exploring business case studies, keeping up with the latest in AI and finance, or connecting with fellow data enthusiasts who share the same curiosity about what's next in tech and analytics.
            </p>
          </div>
        </Section>

        {/* --- Let's Connect --- */}
        <motion.div
          style={{ marginTop: "4rem", textAlign: "center" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: "1.8rem", color: "var(--accent)", marginBottom: "1rem" }}>Let's Connect</h3>
          <p style={{ maxWidth: "700px", margin: "0 auto 1.5rem auto", color: "#ccc" }}>
            I'm always open to conversations about data analytics, risk management, fintech innovation, or any interesting problems worth solving. Whether you're a fellow analyst, a recruiter, or someone navigating the evolving world of data — I'd love to connect.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            <FaHandshake size={40} color="var(--accent)" />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

// Helper Components for cleaner code
const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    style={{ marginTop: "4rem" }}
  >
    <h3 style={{ fontSize: "1.8rem", color: "white", marginBottom: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
      {title}
    </h3>
    <div style={{ color: "rgba(255,255,255,0.85)" }}>
      {children}
    </div>
  </motion.div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -5, background: "rgba(255,255,255,0.08)" }}
    style={{
      background: "rgba(255,255,255,0.05)",
      padding: "1.5rem",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    <div style={{ marginBottom: "1rem" }}>{icon}</div>
    <h4 style={{ fontSize: "1.2rem", color: "white", marginBottom: "0.5rem" }}>{title}</h4>
    <p style={{ fontSize: "0.95rem", color: "#ccc", lineHeight: 1.6 }}>{desc}</p>
  </motion.div>
);

export default AboutMe;
