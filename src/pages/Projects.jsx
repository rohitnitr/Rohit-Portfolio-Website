import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Plus, Edit2, Trash2 } from 'lucide-react'
import { db, auth } from '../firebase'
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const DEFAULTS = [
    {
      id: 'default-1',
      title: '💳 Credit Card Spending Analysis',
      desc: 'Analyzed transaction data for 100+ customers using SQL to identify spending patterns and repayment behaviors. Designed a Power BI dashboard to optimize customer engagement strategies with targeted cashback programs.',
      ss: '/projects/credit-card.png',
      tech: ['SQL', 'Power BI', 'Data Analytics'],
      live: '#',
      code: 'https://github.com/rohitnitr'
    },
    {
      id: 'default-2',
      title: '🛒 E-Commerce Data Analysis',
      desc: 'Evaluated e-commerce transactions using SQL and Excel to uncover trends. Created interactive pivot tables and visualizations to recommend inventory optimization strategies, reducing stockouts by 30%.',
      ss: '/projects/ecommerce.png',
      tech: ['SQL', 'Excel', 'Pivot Tables'],
      live: '#',
      code: 'https://github.com/rohitnitr'
    },
    {
      id: 'default-3',
      title: '🏥 GEHC Precision Care Challenge',
      desc: 'Developed a predictive healthcare model using Random Forest algorithm with 97% accuracy. Performed data preprocessing and hyperparameter tuning for optimal performance.',
      ss: '/projects/healthcare.png',
      tech: ['Python', 'Random Forest', 'Machine Learning'],
      live: '#',
      code: 'https://github.com/rohitnitr'
    }
  ];

  useEffect(() => {
    // Listen for real-time updates from 'projects' collection
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
    });

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this project?")) {
      try {
        await deleteDoc(doc(db, "projects", id));
      } catch (err) {
        console.error(err);
        alert("Failed to delete. Ensure you are an admin.");
      }
    }
  };

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <motion.h2
              className="text-4xl font-semibold text-cyan-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              🚀 Projects
            </motion.h2>
            <p className="text-gray-400 mb-4">
              A collection of my major works — blending research, AI innovation.
            </p>
          </div>
          {user && (
            <button
              onClick={() => navigate('/admin/projects')}
              style={{
                padding: '10px 20px',
                background: '#0ea5e9',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '600'
              }}
            >
              <Plus size={18} /> Add Project
            </button>
          )}
        </div>

        {/* Always display either DB projects or DEFAULTS */}
        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {(projects.length > 0 ? projects : DEFAULTS).map((p, idx) => (
            <motion.div
              key={p.id}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              {p.ss && (
                <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <img
                    src={p.ss}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: 12
                    }}
                  />
                </motion.div>
              )}

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {p.title}
                  {user && !p.id.toString().startsWith('default-') && (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        onClick={() => navigate(`/admin/projects?edit=${p.id}`)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc' }}
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                </h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech && p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  {p.code && (
                    <motion.a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'rgba(255,255,255,0.05)',
                        color: '#0ea5e9',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        border: '1px solid rgba(0,255,255,0.1)',
                        textDecoration: 'none'
                      }}
                    >
                      <Github size={14} /> Code
                    </motion.a>
                  )}
                  {p.live && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: 'none'
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
