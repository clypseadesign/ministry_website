import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { asset } from '../utils/asset';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <PageHero title="CONTACT US" subtitle="WE WOULD LOVE TO HEAR FROM YOU" />

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${asset('/pdf-pages/contact_us_page_1.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section className="section" style={{ background: '#ffffff' }}>
            <div className="container">
              <div className="grid-2" style={{ gap: '48px' }}>
                {/* Contact Info */}
                <div>
                  <h2 style={{ fontSize: '2.6rem', color: '#005495', marginBottom: '24px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'left' }}>
                    Contact Information
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px', fontSize: '1rem' }}>
                    We would love to hear from you. Whether you need assistance, want to get involved, or wish to support God Cares Ministries, please reach out.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h5 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>ADDRESS</h5>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                          God Cares Ministries<br />
                          326/2, 3rd Floor, "Sri Lakshmi Sideshwara Nilaya, Chikka Gowda Layout, Opp. to Canara Bank, Kalkere, Horamavu Post, Bangalore-560 043, Karnataka, India.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={22} />
                      </div>
                      <div>
                        <h5 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>EMAIL</h5>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>support@theuniversalroyallawoflove.org</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={22} />
                      </div>
                      <div>
                        <h5 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>PHONE</h5>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+91-88923 36400</p>
                      </div>
                    </div>
                  </div>

                  {/* Your Contribution Makes a Difference */}
                  <div style={{ background: 'var(--bg-card)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      YOUR CONTRIBUTION MAKES A DIFFERENCE
                    </h3>
                    {sent ? (
                      <div style={{ textAlign: 'center', padding: '28px 0' }}>
                        <p style={{ color: 'var(--primary-dark-blue)', fontSize: '1.15rem', fontWeight: '600', lineHeight: '1.7' }}>
                          Thank you! Your message has been received.<br />
                          We will get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Full Name</label>
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
                          <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Email Address</label>
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
                          <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Phone Number</label>
                          <input 
                            type="tel" 
                            required 
                            value={form.phone} 
                            onChange={e => setForm({ ...form, phone: e.target.value })} 
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                            placeholder="+91-XXXXXXXXXX" 
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Message</label>
                          <textarea 
                            rows={4} 
                            required 
                            value={form.message} 
                            onChange={e => setForm({ ...form, message: e.target.value })} 
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                            placeholder="Write your message here....." 
                          />
                        </div>
                        <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: '1rem', marginTop: '10px' }}>
                          <Send size={18} /> SUBMIT
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Right side can have additional info or map */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ background: 'var(--bg-light-blue)', padding: '48px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Get In Touch
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '24px' }}>
                      We are here to help and answer any questions you might have. We look forward to hearing from you.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Mail size={18} />
                        </div>
                        <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>support@theuniversalroyallawoflove.org</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Phone size={18} />
                        </div>
                        <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>+91-88923 36400</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#005495', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <MapPin size={18} />
                        </div>
                        <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>Bangalore, Karnataka, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
