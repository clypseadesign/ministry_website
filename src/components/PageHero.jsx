import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import cloudBg from '/assets/all-pages-banner.png';

export default function PageHero({ title, subtitle, bgImage, showButton = true, buttonText = 'Join "The Universal Royal Law of Love" Project' }) {
  return (
    <div className="hero-cloud-banner">
      <img src={bgImage || cloudBg} alt="Header Overlay" className="hero-cloud-bg" />
      <div className="hero-content">
        {subtitle && <span className="hero-tag">{subtitle}</span>}
        <h1 className="hero-title">{title}</h1>
        {showButton && (
          <a href="/donate-us" className="hero-button-gold">
            <span>{buttonText}</span>
            <ArrowRightCircle size={20} />
          </a>
        )}
      </div>
    </div>
  );
}
