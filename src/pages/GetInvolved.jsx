import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Heart, Users, Share2, MessageSquare } from 'lucide-react';

export default function GetInvolved() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: 'Volunteer', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero title="GET INVOLVED" subtitle="JOIN US IN MAKING A DIFFERENCE" />

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <h2 className="section-title">JOIN US IN SPREADING LOVE & HOPE</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Whether through volunteering your time, sharing our message, or supporting our humanitarian relief efforts, your involvement helps us reach communities in need.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '64px' }}>
            <div className="card-item" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 16px auto' }}><Heart size={26} /></div>
              <h4 className="card-title" style={{ fontSize: '1.2rem' }}>Become a Volunteer</h4>
              <p className="card-desc">Offer your skills, time, and heart to serve food, organize camps, and assist local programs.</p>
            </div>

            <div className="card-item" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 16px auto' }}><Users size={26} /></div>
              <h4 className="card-title" style={{ fontSize: '1.2rem' }}>Chapter Coordinator</h4>
              <p className="card-desc">Lead local community initiatives and represent God Cares Ministries in your region.</p>
            </div>

            <div className="card-item" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 16px auto' }}><Share2 size={26} /></div>
              <h4 className="card-title" style={{ fontSize: '1.2rem' }}>Ambassador of Love</h4>
              <p className="card-desc">Spread our educational materials, music, and digital resources to inspire others.</p>
            </div>

            <div className="card-item" style={{ textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 16px auto' }}><MessageSquareCheck size={26} /></div>
              <h4 className="card-title" style={{ fontSize: '1.2rem' }}>Partner Organization</h4>
              <p className="card-desc">Collaborate with us on medical drives, youth programs, and humanitarian relief.</p>
            </div>
          </div>

          {/* Volunteer Registration Form */}
          <div className="card-item" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', background: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textAlign: 'center' }}>
              VOLUNTEER REGISTRATION FORM
            </h3>
            <p style={{ textTransform: 'none', textAlign: 'center', color: 'var(--text-muted)', marginBottom: '32px' }}>
              Fill out the form below and our team will get in touch with you.
            </p>

            {submitted ? (
              <div style={{ background: '#dcfce7', color: '#15803d', padding: '20px', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontWeight: '700' }}>
                Thank you for registering to volunteer! We will reach out to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={e => setFormData({ ...formData, name: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={e => setFormData({ ...formData, email: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Enter your email" 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone} 
                      onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="+91-XXXXXXXXXX" 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Preferred Role</label>
                    <select 
                      value={formData.role} 
                      onChange={e => setFormData({ ...formData, role: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem', background: '#ffffff' }}
                    >
                      <option>Volunteer</option>
                      <option>Chapter Coordinator</option>
                      <option>Ambassador of Love</option>
                      <option>Partner Organization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Message / Skills</label>
                  <textarea 
                    rows={4} 
                    value={formData.message} 
                    onChange={e => setFormData({ ...formData, message: e.target.value })} 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                    placeholder="Tell us how you would like to contribute..." 
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: '1rem', marginTop: '10px' }}>
                  SUBMIT REGISTRATION
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
