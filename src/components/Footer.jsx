import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '/assets/41771aca37781f6391cd61ff54f932c952e2f068.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Logo & Title */}
        <div className="footer-top">
          <img src={logoImg} alt="God Cares Ministries Logo" className="footer-logo" />
          <h2 style={{ fontSize: '1.6rem', color: '#ffffff', fontFamily: 'var(--font-heading-fancy)' }}>
            God Cares Ministries
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', fontStyle: 'italic' }}>
            (A Ministry Rooted in Love)
          </p>
        </div>

        {/* Footer Columns */}
        <div className="footer-cols">
          <div>
            <h4 className="footer-col-title">Important Links</h4>
            <ul className="footer-links">
              <li><NavLink to="/media-resources">Media & Resource</NavLink></li>
              <li><NavLink to="/get-involved">Get Involved</NavLink></li>
              <li><NavLink to="/transparency-legal">Transparency & Legal</NavLink></li>
              <li><NavLink to="/gratitude">Personal Gratitude & Sincere Thanks</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><NavLink to="/our-work">Our Work</NavLink></li>
              <li><NavLink to="/donate-us">Donate Us</NavLink></li>
              <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Policies</h4>
            <ul className="footer-links">
              <li><NavLink to="/transparency-legal">Privacy Policy</NavLink></li>
              <li><NavLink to="/transparency-legal">Refund Policy</NavLink></li>
              <li><NavLink to="/transparency-legal">Terms & Conditions</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links" style={{ gap: '12px' }}>
              <li style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                support@theuniversalroyallawoflove.org
              </li>
              <li style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                +91-88923 36400
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <p>© 2026 GODS CARES MINISTRIES. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
