import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/admin');
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '2rem',
            background: '#0d0d0d',
            color: 'white'
        }}>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-cyan-400">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: '8px 16px',
                        background: '#ef4444',
                        color: 'white',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </div>

            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div onClick={() => navigate('/admin/projects')} style={{ background: '#1e1e1e', padding: '2rem', borderRadius: '12px', border: '1px solid #333', cursor: 'pointer', textAlign: 'center' }}>
                    <h2 className="text-xl font-bold text-cyan-400">Manage Projects</h2>
                    <p className="text-gray-400 mt-2">Add, Edit, or Delete Projects</p>
                </div>

                {/* Placeholders for other sections */}
                <div style={{ background: '#1e1e1e', padding: '2rem', borderRadius: '12px', border: '1px solid #333', opacity: 0.5 }}>
                    <h2 className="text-xl font-bold text-gray-500">Manage Blog (Coming Soon)</h2>
                </div>
                <div style={{ background: '#1e1e1e', padding: '2rem', borderRadius: '12px', border: '1px solid #333', opacity: 0.5 }}>
                    <h2 className="text-xl font-bold text-gray-500">Manage Skills (Coming Soon)</h2>
                </div>
            </div>
        </div>
    );
}
