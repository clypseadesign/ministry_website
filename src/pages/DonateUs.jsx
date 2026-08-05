import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ShieldCheck, Heart, CreditCard, Lock } from 'lucide-react';

export default function DonateUs() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [donor, setDonor] = useState({ name: '', email: '', phone: '', pan: '' });

  const handleDonate = (e) => {
    e.preventDefault();
    const finalAmt = customAmount || selectedAmount;
    navigate('/payment-successful', { state: { amount: finalAmt, name: donor.name } });
  };

  return (
    <div>
      <PageHero title="DONATE US" subtitle="SUPPORT OUR MISSION - UNLIMITED SEEDS" />

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <h2 className="section-title">EVERY SEED MATTERS</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Your contributions directly fund our humanitarian relief drives, hospital building project, medical camps, and global peace education initiatives.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            {/* Left Donation Options Form */}
            <div className="card-item" style={{ padding: '36px', background: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px' }}>
                MAKE A DONATION
              </h3>

              <form onSubmit={handleDonate} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Frequency Toggle */}
                <div style={{ display: 'flex', background: '#e2e8f0', borderRadius: 'var(--radius-pill)', padding: '4px' }}>
                  <button 
                    type="button" 
                    onClick={() => setFrequency('one-time')} 
                    style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-pill)', border: 'none', fontWeight: '700', cursor: 'pointer', background: frequency === 'one-time' ? 'var(--primary-blue)' : 'transparent', color: frequency === 'one-time' ? '#ffffff' : 'var(--text-muted)' }}
                  >
                    Give One-Time
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setFrequency('monthly')} 
                    style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-pill)', border: 'none', fontWeight: '700', cursor: 'pointer', background: frequency === 'monthly' ? 'var(--primary-blue)' : 'transparent', color: frequency === 'monthly' ? '#ffffff' : 'var(--text-muted)' }}
                  >
                    Give Monthly
                  </button>
                </div>

                {/* Amount Selectors */}
                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '12px', color: 'var(--primary-dark-blue)' }}>Select Amount (INR)</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                    {['500', '1000', '5000', '10000', '25000', '50000'].map((amt) => (
                      <button 
                        key={amt} 
                        type="button" 
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }} 
                        style={{ padding: '14px', borderRadius: '8px', border: selectedAmount === amt && !customAmount ? '2px solid var(--primary-blue)' : '1px solid var(--border-card)', background: selectedAmount === amt && !customAmount ? 'var(--primary-blue)' : '#ffffff', color: selectedAmount === amt && !customAmount ? '#ffffff' : 'var(--primary-dark-blue)', fontWeight: '700', cursor: 'pointer', fontSize: '1.05rem' }}
                      >
                        ₹ {amt}
                      </button>
                    ))}
                  </div>

                  <input 
                    type="number" 
                    placeholder="Or enter custom amount in ₹" 
                    value={customAmount} 
                    onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(''); }} 
                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '1rem' }} 
                  />
                </div>

                {/* Donor Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)' }}>DONOR INFORMATION</h4>
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name" 
                    value={donor.name} 
                    onChange={e => setDonor({ ...donor, name: e.target.value })} 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="Email Address" 
                    value={donor.email} 
                    onChange={e => setDonor({ ...donor, email: e.target.value })} 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                  />
                  <input 
                    type="tel" 
                    required 
                    placeholder="Phone Number" 
                    value={donor.phone} 
                    onChange={e => setDonor({ ...donor, phone: e.target.value })} 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '1.1rem', background: 'linear-gradient(180deg, #d4af37 0%, #b8860b 100%)', color: 'var(--primary-navy)' }}>
                  <Lock size={18} />
                  PROCEED TO SECURE PAYMENT (₹ {customAmount || selectedAmount})
                </button>

                <p style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', display: 'flex', alignItems: 'center', justifyCenter: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} /> 256-bit Encrypted & 100% Tax Deductible Receipts Available
                </p>
              </form>
            </div>

            {/* Right Information & Impact Breakdown */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px' }}>
                HOW YOUR DONATION HELPS
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                Every rupee contributed to God Cares Ministries is stewarded with strict financial accountability and transparency.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--primary-blue)' }}><Heart size={28} /></div>
                  <div>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem' }}>Humanitarian Food & Shelter</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Provides daily meals, emergency food kits, and shelter support to families in extreme distress.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--primary-blue)' }}><CreditCard size={28} /></div>
                  <div>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem' }}>24/7 Hospital Building Fund</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Funds the construction and medical equipment for our state-of-the-art care hospital facility.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--primary-blue)' }}><ShieldCheck size={28} /></div>
                  <div>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem' }}>Global Multilingual Media</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Supports music production, translation into 50+ languages, and radio broadcasting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
