import React from 'react';
import PageHero from '../components/PageHero';
import { Heart, Award, Star, Download } from 'lucide-react';
import founderImg from '/assets/91e0b0b1480b4477247e78718d2ec15606e7e622.jpg';

export default function PersonalGratitude() {
  return (
    <div>
      <PageHero title="PERSONAL GRATITUDE & SINCERE THANKS" subtitle="FROM THE DESK OF DR. C. JAMES WHITE" />

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/pdf-pages/PERSONAL_GRATITUDE_and_SINCERE_THANKS_page_1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section className="section" style={{ background: '#ffffff' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Personal Gratitude
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  With Heartfelt Gratitude and Humble Appreciation
                </p>
              </div>

              {/* Gratitude Message */}
              <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '48px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', marginBottom: '48px' }}>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                  Sincere thanks and profound appreciation are extended to all the institutions, churches, families, friends, teachers, mentors, supporters, and well-wishers who have shared their love, care, guidance, encouragement, and support throughout the formative years and life journey of C. James White.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                  From childhood onward, countless compassionate hearts became instruments of God's providence through education, shelter, food, clothing, spiritual nurturing, friendship, encouragement, and opportunities for personal growth and service. The kindness, discipline, prayers, generosity, and goodwill received over the years have played a significant role in shaping character, strengthening faith, inspiring purpose, and fostering a lifelong commitment to truth, compassion, wisdom, and humanitarian service.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                  Special gratitude is offered to the many devoted servants of God, church leaders, statesmen, philosopher-guides, distinguished mentors, educators, and spiritual counselors whose wisdom, example, and guidance helped illuminate the path of faith, learning, leadership, and service. Their teachings, counsel, and noble lives continue to inspire dedication to God, love for humanity, and the pursuit of righteousness and truth.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                  The loving support, noble examples, and enduring influence of many individuals and institutions remain deeply cherished and gratefully remembered. Every act of kindness—whether great or small—has left a lasting impression and continues to inspire unwavering faith in God, sincere love for humanity, and steadfast dedication to serving others.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                  May the Lord abundantly bless, strengthen, guide, and reward all those who, in countless ways, have shared their lives, resources, prayers, encouragement, wisdom, and goodwill with love and sincerity. Their invaluable contributions, friendship, and support will forever be remembered with gratitude, honor, respect, and heartfelt appreciation. Their legacy of kindness continues to illuminate the path of service, faith, and hope for generations to come.
                </p>
              </div>

              {/* People and Institutions List */}
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                  Institutions & Individuals Who Made a Difference
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>James Memorial School, Prakasapuram</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For its vital role in my education</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Church at James Memorial High School, Prakasapuram</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>From 1971-1981, the church nurtured faith, prayer, and godly guidance.</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Late Pr. T. J. Lazarus (Bengaluru)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Beloved Principal who guided me with love</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Mrs. & Mr. G. Mohankumar (Kaliyur)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Teachers who nurtured and continue to guide me</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Mrs. Esther Gomez & Late Mr. Derrick Gomez (Hosur)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Dean of Boys - Who loved and cared</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Families Who Stood With Me</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Late Mrs. & Late Mr. Thiyagarajan (Nagercoil), Mrs. Leena Andrew & Mr. Andrew Samuel (Kolar Gold Fields), Late Mrs. & Late Mr. Sadasivam (Kolar Gold Fields)</p>
                  </div>
                </div>
              </div>

              {/* International Support */}
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                  International Support & Contributions
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Bro. Michael Taiaro (Australia)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Provided essential tools with love</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Late Pr. Lawrence M. Nelson (USA)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enabled printing of 150,000 books (English, Tamil, Kannada)</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Pr. Jack Dale Stout (USA)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Supported my family and children's education</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Bro. Neil Valentine (Australia)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Encouraged and supported the mission</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Bro. Jyrki Kero (Finland)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Stood as a true Good Samaritan</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Late Pr. Robert J. Kloosterhuis (USA)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Supported during times of crisis</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Sister Antoinette Danowski Travers & Bro. Chris (USA)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Served with a compassionate heart</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Sister Pat Temple (Canada)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Extended support for mission work in India</p>
                  </div>
                </div>
              </div>

              {/* Philosopher-guide */}
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                  Philosopher-guide, Church-Statesman & Distinguished Mentor
                </h3>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px', textTransform: 'uppercase' }}>
                    Dr. J. Robert Donald, PhD, FAGE
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '12px' }}>
                    Ambassador, International Human Rights Association® (IHRA). After serving 42 years in the Services Association of Seventh Day Adventist Company as College Registrar, Professor, College Principal, Education Director for Goa, Karnataka, Kerala, Pondicherry and Tamil Nadu, Chairman, Goa and Karnataka SDA Education Board, Director of Global Mission, and Director of Public Affairs and Religious Liberty for India, Nepal, Bhutan and Maldives, after May 2015, he was called to be associated as Ambassador, International Human Rights Association, Chief Patron, International Anti-corruption Organization, Evaluation Commissioner, International Accreditation Organization, Global Advisor, Global Chamber of Consumer Rights, Director, Universal Institute of Human Rights Education.
                  </p>
                </div>
              </div>

              {/* Close Personal Support */}
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                  Close Personal Support
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Dr. P. S. Martin, M.A., M.Phil., B.Ed., Ph.D. (Chengalpattu)</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>A beloved brother whose support remains constant</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Mr. M. John Peter</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Music Director, for his valuable contribution to the album "The Holy Sabbath"</p>
                  </div>
                </div>
              </div>

              {/* Credits */}
              <div style={{ marginBottom: '48px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Website Designed & Developed
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                  Acknowledgment - The team at Clypsea extends our heartfelt gratitude to Mr. James White for giving us the opportunity and placing his trust in us to design and develop this website. It has been an honor and privilege to contribute to this meaningful mission, and we sincerely hope this platform serves as a lasting source of inspiration, faith, and hope for people around the world. We thank Mr. James White for his confidence in Clypsea and wish God's abundant blessings upon him and this ministry.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Video Editing & Mixing</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mr. Vishaldo J Mathinan</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Email: vicolsvishaldo@gmail.com</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Mob: 63823 54705</p>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>All DTP & Design Work</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mr. David Daniel</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Mob: + 919035816685</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Email: info@zioninnovation.in</p>
                  </div>
                </div>
              </div>

              {/* Family Photo */}
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  THE LOVING SUPPORT AND PRAYERFUL ENCOURAGEMENT OF THE C. JAMES WHITE FAMILY
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1rem', maxWidth: '700px', margin: '0 auto 24px auto' }}>
                  The family behind God Cares Ministries continues to support the ministry, its charitable purposes, and all productions through personal sacrifice and dedicated commitment.
                </p>
                <img 
                  src="/about-us/family-new.png" 
                  alt="C. James White Family" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '600px', 
                    height: 'auto', 
                    borderRadius: '24px', 
                    boxShadow: '0 12px 32px rgba(0, 85, 149, 0.15)',
                    display: 'block',
                    margin: '0 auto'
                  }} 
                />
                <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '0.95rem', fontWeight: '600' }}>
                  From Left to Right: Sharon Doris Angel. J, C. James White, Vijaya James White & Stanley Dev Adams. J
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
