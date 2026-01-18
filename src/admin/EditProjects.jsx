import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Edit2, Trash2, ArrowLeft, Save } from 'lucide-react';


const DEFAULTS = [
    {
        title: '💳 Credit Card Spending Analysis',
        desc: 'Analyzed transaction data for 100+ customers using SQL to identify spending patterns and repayment behaviors. Designed a Power BI dashboard to optimize customer engagement strategies with targeted cashback programs.',
        ss: 'https://via.placeholder.com/600x400?text=Credit+Card+Analysis',
        tech: ['SQL', 'Power BI', 'Data Analytics'],
        live: '#',
        code: 'https://github.com/rohitnitr'
    },
    {
        title: '🛒 E-Commerce Data Analysis',
        desc: 'Evaluated e-commerce transactions using SQL and Excel to uncover trends. Created interactive pivot tables and visualizations to recommend inventory optimization strategies, reducing stockouts by 30%.',
        ss: 'https://via.placeholder.com/600x400?text=E-Commerce+Analysis',
        tech: ['SQL', 'Excel', 'Pivot Tables'],
        live: '#',
        code: 'https://github.com/rohitnitr'
    },
    {
        title: '🏥 GEHC Precision Care Challenge',
        desc: 'Developed a predictive healthcare model using Random Forest algorithm with 97% accuracy. Performed data preprocessing and hyperparameter tuning for optimal performance.',
        ss: 'https://via.placeholder.com/600x400?text=Healthcare+Model',
        tech: ['Python', 'Random Forest', 'Machine Learning'],
        live: '#',
        code: 'https://github.com/rohitnitr'
    }
];

export default function EditProjects() {
    const [projects, setProjects] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [searchParams] = useSearchParams();

    const [form, setForm] = useState({
        title: '',
        desc: '',
        ss: '',
        tech: '',
        live: '',
        code: ''
    });

    const navigate = useNavigate();
    const projectsCollection = collection(db, 'projects');

    useEffect(() => {
        const unsubscribe = onSnapshot(projectsCollection, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setProjects(data);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const editIdParam = searchParams.get('edit');
        if (editIdParam && projects.length > 0 && !isFormOpen) {
            const projectToEdit = projects.find(p => p.id === editIdParam);
            if (projectToEdit) {
                handleEdit(projectToEdit);
            }
        }
    }, [projects, searchParams]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectData = {
            ...form,
            tech: typeof form.tech === 'string' ? form.tech.split(',').map(t => t.trim()) : form.tech
        };

        try {
            if (editingId) {
                await updateDoc(doc(db, 'projects', editingId), projectData);
            } else {
                await addDoc(projectsCollection, projectData);
            }
            resetForm();
        } catch (err) {
            console.error("Error saving project: ", err);
            alert("Error saving project.");
        }
    };

    const resetForm = () => {
        setForm({ title: '', desc: '', ss: '', tech: '', live: '', code: '' });
        setEditingId(null);
        setIsFormOpen(false);
    };

    const handleEdit = (project) => {
        setForm({
            title: project.title,
            desc: project.desc,
            ss: project.ss,
            tech: Array.isArray(project.tech) ? project.tech.join(', ') : project.tech,
            live: project.live,
            code: project.code
        });
        setEditingId(project.id);
        setIsFormOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this project?")) {
            await deleteDoc(doc(db, 'projects', id));
        }
    };

    return (
        <div style={containerStyle}>
            {/* Header */}
            <div style={headerStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => navigate('/admin/dashboard')}
                        style={iconBtnStyle}
                        title="Back to Dashboard"
                    >
                        <ArrowLeft size={24} color="#ccc" />
                    </button>
                    <h1 style={titleStyle}>Manage Projects</h1>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={async () => {
                            if (window.confirm("Add default projects to database? This might create duplicates if they already exist.")) {
                                try {
                                    for (const p of DEFAULTS) {
                                        await addDoc(collection(db, 'projects'), p);
                                    }
                                    alert("Projects seeded successfully!");
                                } catch (error) {
                                    console.error("Error seeding projects:", error);
                                    alert("Failed to seed projects. Ensure you are logged in as admin.");
                                }
                            }
                        }}
                        style={btnStyle('#333', '#ccc')}
                    >
                        <Plus size={20} /> Seed Defaults
                    </button>

                    {!isFormOpen && (
                        <button
                            onClick={() => setIsFormOpen(true)}
                            style={btnStyle('#0ea5e9')}
                        >
                            <Plus size={20} /> Add New Project
                        </button>
                    )}
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Form Section */}
                <AnimatePresence>
                    {isFormOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: '3rem' }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={formCardStyle}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                                        {editingId ? 'Edit Project' : 'Create New Project'}
                                    </h2>
                                    <button onClick={resetForm} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}>
                                        <X size={24} />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                        <FormInput
                                            label="Project Title"
                                            value={form.title}
                                            onChange={e => setForm({ ...form, title: e.target.value })}
                                            placeholder="e.g. AI Financial Analyzer"
                                        />
                                        <FormInput
                                            label="Image URL"
                                            value={form.ss}
                                            onChange={e => setForm({ ...form, ss: e.target.value })}
                                            placeholder="https://..."
                                        />
                                        <FormInput
                                            label="Tech Stack (comma separated)"
                                            value={form.tech}
                                            onChange={e => setForm({ ...form, tech: e.target.value })}
                                            placeholder="React, Firebase, Python"
                                        />
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <FormInput
                                                label="Live Link"
                                                value={form.live}
                                                onChange={e => setForm({ ...form, live: e.target.value })}
                                                placeholder="https://mysite.com"
                                            />
                                            <FormInput
                                                label="Code Link"
                                                value={form.code}
                                                onChange={e => setForm({ ...form, code: e.target.value })}
                                                placeholder="https://github.com/..."
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={labelStyle}>Description</label>
                                        <textarea
                                            style={textareaStyle}
                                            rows="4"
                                            value={form.desc}
                                            onChange={e => setForm({ ...form, desc: e.target.value })}
                                            placeholder="Describe the project impact..."
                                        />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                        <button type="button" onClick={resetForm} style={btnStyle('#333', '#ccc')}>
                                            Cancel
                                        </button>
                                        <button type="submit" style={btnStyle('#0ea5e9')}>
                                            <Save size={18} /> {editingId ? 'Save Changes' : 'Create Project'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Existing Projects List */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#d1d5db', marginBottom: '1.5rem', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                        Existing Projects ({projects.length})
                    </h2>

                    {projects.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '5rem', background: '#111', borderRadius: '12px', border: '1px dashed #333' }}>
                            <p style={{ color: '#666', marginBottom: '1rem' }}>No projects found.</p>
                            <button
                                onClick={async () => {
                                    if (window.confirm("Add default projects?")) {
                                        try {
                                            for (const p of DEFAULTS) {
                                                await addDoc(collection(db, 'projects'), p);
                                            }
                                            alert("Projects seeded successfully!");
                                        } catch (error) {
                                            console.error("Error seeding projects:", error);
                                            alert("Failed to seed projects. ensure you are logged in as admin.");
                                        }
                                    }
                                }}
                                style={btnStyle('#0ea5e9')}
                            >
                                <Plus size={20} /> Seed Defaults
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {projects.map(p => (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={itemCardStyle}
                                >
                                    {/* Image */}
                                    <div style={{ width: '120px', height: '80px', background: '#0d0d0d', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                                        {p.ss ? (
                                            <img src={p.ss} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444', fontSize: '12px' }}>No Image</div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>
                                            {p.title}
                                        </h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            {Array.isArray(p.tech) && p.tech.map((t, i) => (
                                                <span key={i} style={tagStyle}>{t}</span>
                                            ))}
                                        </div>
                                        <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                            {p.desc ? p.desc.substring(0, 100) + '...' : ''}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <button onClick={() => handleEdit(p)} style={actionBtnStyle} title="Edit">
                                            <Edit2 size={20} />
                                        </button>
                                        <button onClick={() => handleDelete(p.id)} style={{ ...actionBtnStyle, color: '#ef4444' }} title="Delete">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

// ---------------- STYLES (No Tailwind) ----------------
const containerStyle = {
    minHeight: '100vh',
    padding: '2rem',
    background: '#0a0a0a',
    color: 'white',
    fontFamily: '"Inter", sans-serif'
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    maxWidth: '1200px',
    margin: '0 auto 2rem auto'
};

const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: 700,
    background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0
};

const formCardStyle = {
    background: '#161616',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid #333'
};

const labelStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af',
    fontWeight: 500,
    marginBottom: '0.5rem'
};

const inputStyle = {
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid #374151',
    borderRadius: '8px',
    padding: '0.75rem',
    color: 'white',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s'
};

const textareaStyle = {
    ...inputStyle,
    resize: 'vertical'
};

const btnStyle = (bg, color = 'white') => ({
    padding: '10px 20px',
    borderRadius: '8px',
    background: bg,
    color: color,
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'opacity 0.2s'
});

const iconBtnStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '9999px',
    transition: 'background 0.2s'
};

const itemCardStyle = {
    display: 'flex',
    gap: '1.5rem',
    background: '#161616',
    padding: '1rem',
    borderRadius: '12px',
    border: '1px solid #262626',
    alignItems: 'center'
};

const tagStyle = {
    background: '#262626',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    color: '#d1d5db'
};

const actionBtnStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '#9ca3af',
    transition: 'color 0.2s, background 0.2s'
};

const FormInput = ({ label, value, onChange, placeholder }) => (
    <div style={{ width: '100%' }}>
        <label style={labelStyle}>{label}</label>
        <input
            style={inputStyle}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
);
