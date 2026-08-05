import React from 'react';
import PageHero from '../components/PageHero';
import { ShieldCheck, FileText, Scale, Lock, FileSpreadsheet } from 'lucide-react';

export default function TransparencyLegal() {
  return (
    <div>
      <PageHero title="TRANSPARENCY & LEGAL" subtitle="GOVERNANCE & FINANCIAL ACCOUNTABILITY" />

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <h2 className="section-title">OUR COMMITMENT TO TRANSPARENCY</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              God Cares Ministries operates under strict non-profit governance standards, ensuring that every financial contribution and operational decision aligns with our core mission of serving humanity with love and integrity.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px', marginBottom: '64px' }}>
            <div className="card-item">
              <div className="card-icon"><ShieldCheck size={26} /></div>
              <h3 className="card-title">Non-Profit Status & Registration</h3>
              <p className="card-desc">
                God Cares Ministries is a registered non-profit charitable trust established in 1999. All activities are conducted in accordance with national laws and international humanitarian guidelines.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon"><FileSpreadsheet size={26} /></div>
              <h3 className="card-title">Annual Audits & Financial Reports</h3>
              <p className="card-desc">
                Our financial statements undergo independent annual audits. Detailed breakdowns of fund allocations (hospital building, relief drives, media projects) are made available to donors and supporters.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon"><Lock size={26} /></div>
              <h3 className="card-title">Donor Privacy Policy</h3>
              <p className="card-desc">
                We respect donor privacy. Personal information, payment details, and contact records are never sold, rented, or shared with third parties under any circumstances.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon"><Scale size={26} /></div>
              <h3 className="card-title">Terms & Refund Policy</h3>
              <p className="card-desc">
                Donations made to God Cares Ministries are non-refundable. In cases of duplicate or erroneous transactions, refund requests submitted within 7 days are processed promptly upon verification.
              </p>
            </div>
          </div>

          {/* Legal Documents Accordion / Download Links */}
          <div className="card-item" style={{ background: 'var(--bg-card)', padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '20px', textAlign: 'center' }}>
              OFFICIAL GOVERNANCE & POLICIES
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--primary-dark-blue)' }}>
                  <FileText size={20} />
                  <span>Trust Deed & Non-Profit Registration Certificate (1999)</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', fontWeight: '700' }}>VERIFIED</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--primary-dark-blue)' }}>
                  <FileText size={20} />
                  <span>Tax Exemption Certification (80G / 12A Equivalent)</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', fontWeight: '700' }}>ACTIVE</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--primary-dark-blue)' }}>
                  <FileText size={20} />
                  <span>Latest Annual Financial Audit Report (2025-2026)</span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', fontWeight: '700' }}>AUDITED</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
