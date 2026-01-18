import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Rohit Poddar
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              Business Analyst & Data Scientist
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Gurgaon, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ rohit.brjn11@gmail.com | 📞 +91 89173 25350
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Business Analyst & Data Scientist with 1.5 years of experience in analytics.
              Expertise in Fraud Risk, Financial Analysis, and Data Storytelling.
              Skilled in SQL, Python, Tableau, Power BI, and Machine Learning.
              Proven track record of preventing losses ($1M+) and optimizing processes via data-driven insights.
            </p>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 16 }}>Business Analyst — Seller Risk Team (Global Fintech Platform)</strong>
                <span style={{ color: "#aaa", fontSize: 14 }}>EXL Service | Apr 2024 – Present</span>
              </div>
              <span style={{ color: "#888", fontSize: 13 }}>Gurgaon, Haryana</span>
              <ul style={{ paddingLeft: 20, marginTop: 8, color: "#ccc", fontSize: 14 }}>
                <li>Analyzed 50K+ monthly transactions using SQL and Excel to identify high-risk seller patterns, detected fraud schemes, preventing $1M+ in potential losses.</li>
                <li>Implemented 10+ risk mitigation strategies reducing chargeback rates by 25% and improving portfolio health.</li>
                <li>Built 10+ automated Tableau dashboards tracking 30+ KPIs, reducing manual reporting time by 40%.</li>
              </ul>
            </li>

            <li style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 16 }}>Business Analyst</strong>
                <span style={{ color: "#aaa", fontSize: 14 }}>Maithan Ispat Limited | Nov 2024 – Mar 2025</span>
              </div>
              <span style={{ color: "#888", fontSize: 13 }}>Bhubaneswar, Odisha</span>
              <ul style={{ paddingLeft: 20, marginTop: 8, color: "#ccc", fontSize: 14 }}>
                <li>Designed centralized database for tracking operational metrics, improving data accessibility for 50+ team members and accelerating decision-making.</li>
              </ul>
            </li>

            <li style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 16 }}>Data Analyst</strong>
                <span style={{ color: "#aaa", fontSize: 14 }}>Atreya Innovations Pvt. Ltd. | Jun 2024 – Nov 2024</span>
              </div>
              <span style={{ color: "#888", fontSize: 13 }}>Pune, Maharashtra</span>
              <ul style={{ paddingLeft: 20, marginTop: 8, color: "#ccc", fontSize: 14 }}>
                <li>Led integration of advanced analytics tools to evaluate sales and marketing effectiveness, enabling real-time reporting across 10+ cross-functional teams.</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🚀 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 16 }}>
              <strong>Credit Card Spending Pattern & Customer Acquisition Analysis</strong> (SQL, Power BI)
              <p style={{ color: "#ccc", fontSize: 14, margin: "4px 0" }}>
                Leveraged SQL to examine 100+ customer transactions. Built Power BI dashboard to visualize spending analytics, optimizing engagement with 5% cashback allocation and 2% penalty strategic structure.
              </p>
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>E-Commerce Data Analysis</strong> (SQL, Excel)
              <p style={{ color: "#ccc", fontSize: 14, margin: "4px 0" }}>
                Evaluated e-commerce transactions to solve business challenges. Created pivot tables and visualizations recommending inventory optimization strategies (30% stockout reduction).
              </p>
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>GEHC Precision Care Challenge</strong> (Random Forest, Python)
              <p style={{ color: "#ccc", fontSize: 14, margin: "4px 0" }}>
                Developed predictive healthcare model achieving 97% accuracy via data preprocessing and hyperparameter tuning.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Metallurgical and Materials Science</strong> — National Institute of Technology, Rourkela (2020–2024) <br />
              <span style={{ color: "#aaa" }}>CGPA: 7.36</span>
            </li>
          </ul>
          <div style={{ marginTop: 12 }}>
            <strong style={{ color: "#ccc", fontSize: 14 }}>Relevant Coursework:</strong>
            <p style={{ color: "#aaa", fontSize: 13, marginTop: 4 }}>
              Advanced SQL, Advanced Excel, Data Visualization, Statistics, Power BI & Tableau, Risk Analytics, Financial Analysis, Python for Data Analysis
            </p>
          </div>
        </motion.div>


        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏅 Certifications</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 14, color: "#ccc" }}>
            <li>• <strong>Google Data Analytics Specialization</strong> (Coursera)</li>
            <li>• <strong>SQL (Advanced)</strong> - 95% (HackerRank)</li>
            <li>• <strong>Python (Basic)</strong> - 85% (HackerRank)</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "SQL", "Python", "Tableau", "Power BI", "Excel", "MySQL",
              "BigQuery", "PostgreSQL", "GCP", "Supabase", "VS Code",
              "Git", "Jupyter", "Risk Analytics", "Financial Analysis"
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/rohitnitr" },
            { name: "💼 LinkedIn", link: "https://linkedin.com/in/rohitnitr" },
            { name: "📧 Email", link: "mailto:rohit.brjn11@gmail.com" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Rohit Poddar Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
