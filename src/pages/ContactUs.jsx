import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <PageHero title="CONTACT US" subtitle="WE WOULD LOVE TO HEAR FROM YOU" />

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px' }}>
            {/* Contact Info */}
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>GET IN TOUCH</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                Have questions about our programs, partnership opportunities, or how to get involved? Reach out to our team using the contact details below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div className="card-icon" style={{ margin: 0 }}><Mail size={22} /></div>
                  <div>
                    <h5 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>EMAIL US</h5>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>support@theuniversalroyallawoflove.org</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div className="card-icon" style={{ margin: 0 }}><Phone size={22} /></div>
                  <div>
                    <h5 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>PHONE</h5>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+91-88923 36400</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div className="card-icon" style={{ margin: 0 }}><MapPin size={22} /></div>
                  <div>
                    <h5 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>HEADQUARTERS</h5>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>God Cares Ministries International Secretariat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-item" style={{ background: 'var(--bg-card)', padding: '36px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '20px' }}>
                SEND US A MESSAGE
              </h3>

              {sent ? (
                <div style={{ background: '#dcfce7', color: '#15803d', padding: '20px', borderRadius: 'var(--radius-sm)', fontWeight: '700', textAlign: 'center' }}>
                  Thank you! Your message has been sent successfully.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Name</label>
                    <input 
                      type="text" 
                      required 
                      value={form.name} 
                      onChange={e => setForm({ ...form, name: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Your full name" 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Email</label>
                    <input 
                      type="email" 
                      required 
                      value={form.email} 
                      onChange={e => setForm({ ...form, email: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Your email address" 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Subject</label>
                    <input 
                      type="text" 
                      required 
                      value={form.subject} 
                      onChange={e => setForm({ ...form, subject: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Subject" 
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Message</label>
                    <textarea 
                      rows={5} 
                      required 
                      value={form.message} 
                      onChange={e => setForm({ ...form, message: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Write your message here..." 
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: '1rem', marginTop: '10px' }}>
                    <Send size={18} /> SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
