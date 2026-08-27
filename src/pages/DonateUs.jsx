import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ShieldCheck, Heart, CreditCard, Lock } from 'lucide-react';
import { asset } from '../utils/asset';

export default function DonateUs() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [donor, setDonor] = useState({ name: '', email: '', phone: '' });

  const handleDonate = (e) => {
    e.preventDefault();
    const finalAmt = customAmount || selectedAmount;
    navigate('/payment-successful', { state: { amount: finalAmt, name: donor.name } });
  };

  return (
    <div>
      <PageHero title="DONATE US" subtitle="SUPPORT OUR MISSION - UNLIMITED SEEDS" />

      {/* Main Content with PDF Page Background */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${asset('/pdf-pages/donate_us_page_1.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="container">
            {/* Support the Mission of Love */}
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
              <h2 style={{ fontSize: '3.2rem', color: '#005495', marginBottom: '20px', fontFamily: 'var(--font-heading-fancy)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Support the Mission of Love
              </h2>
            </div>

            {/* The Founding Family Section */}
            <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                The Founding Family of God Cares Ministries
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                God Cares Ministries was established through the vision, sacrifice, and unwavering commitment of one family dedicated to serving humanity with compassion, integrity, and hope. From its very beginning, the ministry has been sustained through their personal dedication, resources, and steadfast commitment to improving lives and promoting universal values that strengthen individuals, families, and communities.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>C. James White</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Founder</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Mrs. Vijaya James White</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Co-founder</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Stanley Dev Adams J.</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Son</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase' }}>Sharon Doris Angel J.</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Daughter</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                From the earliest days of the ministry, the founding family has wholeheartedly devoted their time, talents, resources, and personal family savings to establish and sustain its work. Through many challenges and personal sacrifices, they have remained steadfast in their commitment to expanding the ministry's educational, humanitarian, and community service initiatives.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Throughout its journey, God Cares Ministries has progressed largely through the perseverance and dedication of its founding family. Their vision has always been to serve humanity with sincerity, compassion, and practical care while encouraging values that promote truth, love, justice, peace, responsibility, kindness, integrity, and mutual respect.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Today, the ministry carries out its mission through educational initiatives, humanitarian outreach, community development, and the production of multilingual audio-visual resources designed to inspire hope, strengthen moral and ethical values, and encourage positive transformation in individuals and society.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Among its major initiatives are The Universal Royal Law of Love and The Holy Sabbath—educational projects that encourage thoughtful reflection on timeless principles that promote love, compassion, justice, responsibility, integrity, respect for one another, and reverence for the Creator. These initiatives seek to foster understanding, meaningful dialogue, and peaceful coexistence among people of every nation, culture, language, and community.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                The founding family's desire has never been personal recognition or material gain. Their greatest fulfilment comes from seeing lives transformed through education, compassionate service, and opportunities that bring hope, dignity, encouragement, and a brighter future to individuals and families facing hardship.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Looking to the future, they aspire to produce high-definition multilingual audio-visual resources and educational materials that can be freely accessed by people throughout the world. Their vision is to make these resources available in as many languages as possible so that people from diverse cultures and backgrounds may benefit from messages that promote truth, love, compassion, justice, peace, responsible living, and mutual respect.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                The founding family warmly invites compassionate individuals, families, organisations, institutions, and well-wishers to partner with God Cares Ministries in advancing this mission of education, humanitarian service, and community development.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Your encouragement, participation, and generous financial support help expand educational initiatives, develop multilingual audio-visual resources, strengthen humanitarian outreach, and extend practical assistance to individuals and families experiencing poverty, hardship, and crisis.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Together, we can provide nutritious food for hungry families, essential medical care and life-saving medicines for the sick, clothing for those in need, educational assistance for underprivileged children, and support to repair or rebuild unsafe homes that leave families vulnerable to rain, extreme weather, and unsafe living conditions.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                God Cares Ministries serves all people without discrimination, regardless of caste, colour, creed, religion, nationality, language, ethnicity, community, gender, age, social status, or economic condition. Our humanitarian services are offered with compassion, respect, fairness, and a commitment to upholding the dignity, worth, and well-being of every human being.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Every contribution—whether through prayer, encouragement, volunteering, professional expertise, or financial support—helps restore hope, improve lives, and create opportunities for individuals and communities to flourish. Each act of generosity becomes an investment in a future built upon compassion, dignity, justice, mutual care, and lasting hope.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Together, we can build stronger families, healthier communities, and a more compassionate world by promoting universal values that unite rather than divide, bringing hope, practical support, and positive transformation wherever they are needed most.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '32px', fontSize: '1rem', fontWeight: '600' }}>
                Serving humanity with truth, love, compassion, justice, peace, and hope.
              </p>
            </div>

            {/* Donation Tiers */}
            <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                SUPPORT OUR MISSION
              </h3>
              <p style={{ fontSize: '1.5rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textAlign: 'center', letterSpacing: '2px', lineHeight: '1.3' }}>
                Your Support Can Change Lives
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', textAlign: 'center', fontSize: '1rem' }}>
                Every contribution helps us continue our mission of love, service, and hope for a better tomorrow.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700' }}>BASIC SUPPORT</span>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary-blue)', margin: '12px 0', fontFamily: 'var(--font-heading-fancy)' }}>₹ 500</div>
                  <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                    <li>✓ Local Programs</li>
                    <li>✓ Peace Literature</li>
                  </ul>
                  <NavLink to="/donate-us" className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                    Donate Now
                  </NavLink>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700' }}>GROWTH SUPPORT</span>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary-blue)', margin: '12px 0', fontFamily: 'var(--font-heading-fancy)' }}>₹ 1000</div>
                  <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                    <li>✓ Multilingual Trans</li>
                    <li>✓ Sponsor Peace Events</li>
                  </ul>
                  <NavLink to="/donate-us" className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                    Donate Now
                  </NavLink>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700' }}>SPONSOR INITIATIVE</span>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary-blue)', margin: '12px 0', fontFamily: 'var(--font-heading-fancy)' }}>₹ 5000</div>
                  <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                    <li>✓ Impact Reports</li>
                    <li>✓ VIP Event Access</li>
                  </ul>
                  <NavLink to="/donate-us" className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                    Donate Now
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Scan & Donate Section */}
            <div style={{ maxWidth: '900px', margin: '0 auto 64px auto', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                SCAN & DONATE
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1rem' }}>
                Donations made to God Cares Ministries are eligible for tax exemption in accordance with applicable laws. Official donation receipts will be provided for eligible contributions.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px', textTransform: 'uppercase' }}>State Bank of India</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    This State Bank of India Current Account is maintained solely for charitable, humanitarian, and ministry purposes.
                  </p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.1rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '12px', textTransform: 'uppercase' }}>Canara Bank</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    This Canara Bank Current Account is designated exclusively for participation, enrolment and voluntary support for "The Universal Royal Law of Love" Project.
                  </p>
                </div>
              </div>
            </div>

            {/* Support the Family Behind This Mission */}
            <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                "SUPPORT THE FAMILY BEHIND THIS MISSION"
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                For many years, the founding family of God Cares Ministries has sustained the ministry through personal sacrifice, dedicating not only their time, talents, and energy, but also their family savings and a significant portion of their personal income. Believing deeply in the mission entrusted to them, C. James White made the life-changing decision to leave his employment in order to devote himself full-time to the ministry. Since then, the family has consistently placed the mission above personal comfort, often carrying substantial financial responsibilities so that the ministry's educational, humanitarian, and community service initiatives could continue without interruption.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                These ongoing sacrifices have placed considerable financial strain on the family. Yet they remain steadfast in their commitment to serving others, continuing the ministry's work with faith, perseverance, compassion, and hope despite many challenges.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                If the mission and values of God Cares Ministries have touched your heart, we warmly invite you to consider supporting both the ministry and its founding family. Your generous contribution will help meet the family's essential living expenses, enable them to continue their full-time service, and strengthen the ministry's ongoing educational initiatives, humanitarian outreach, multilingual audio-visual productions, and assistance to individuals, families, and communities experiencing poverty and hardship.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Every gift, whether large or small, is deeply appreciated. Your generosity not only helps sustain those who have dedicated their lives to this work but also enables this mission of compassion, education, and humanitarian service to continue reaching people with hope, practical care, knowledge, and opportunities for a better future.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1rem' }}>
                Thank you for standing with God Cares Ministries and its founding family. Your kindness, encouragement, and support become part of a shared commitment to serving humanity with truth, love, compassion, justice, peace, and hope. Together, we can continue extending this mission of service and making a lasting difference in the lives of many.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '32px', fontSize: '1rem' }}>
                Bank details and QR code for contributions are provided below. We sincerely thank you for your kindness, goodwill, prayers, and support.
              </p>
            </div>

            {/* Bank Details */}
            <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                BANK DETAILS
              </h3>
              
              <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', marginBottom: '24px' }}>
                <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase' }}>For Indian Donors</h4>
                <div style={{ display: 'grid', gap: '12px', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>NAME:</span>
                    <span style={{ color: 'var(--text-dark)' }}>James White. C</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>MOBILE NO.:</span>
                    <span style={{ color: 'var(--text-dark)' }}>+91-88923 36400</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>A/C. NO:</span>
                    <span style={{ color: 'var(--text-dark)' }}>30037928670</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>NAME OF THE BANK:</span>
                    <span style={{ color: 'var(--text-dark)' }}>State Bank of India</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>BANK ADDRESS:</span>
                    <span style={{ color: 'var(--text-dark)' }}>No.2, A Muni Reddy Layout, Horamavu Main, Bangalore.</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>PHONE NO. OF BANK:</span>
                    <span style={{ color: 'var(--text-dark)' }}>080-25943396</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>EMAIL OF BANK:</span>
                    <span style={{ color: 'var(--text-dark)' }}>sbi.13397@sbi.co.in</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>TYPE OF BANK ACCOUNT:</span>
                    <span style={{ color: 'var(--text-dark)' }}>Savings Bank Account</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>BANK BRANCH CODE:</span>
                    <span style={{ color: 'var(--text-dark)' }}>13397</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>CIF NO.:</span>
                    <span style={{ color: 'var(--text-dark)' }}>85021807847</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>IFSC CODE:</span>
                    <span style={{ color: 'var(--text-dark)' }}>SBIN0040807 (After SBIN it is zero zero not OO)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>SWIFT CODE NO.:</span>
                    <span style={{ color: 'var(--text-dark)' }}>SBININBB223</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '16px', textTransform: 'uppercase' }}>For Foreign Donors</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.95rem' }}>
                  Designated FCRA Receipt-cum-Utilisation Account
                </p>
                <div style={{ display: 'grid', gap: '12px', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Account Name:</span>
                    <span style={{ color: 'var(--text-dark)' }}>God Cares Ministries</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Bank:</span>
                    <span style={{ color: 'var(--text-dark)' }}>State Bank of India</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Account Number:</span>
                    <span style={{ color: 'var(--text-dark)' }}>43770602442</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch:</span>
                    <span style={{ color: 'var(--text-dark)' }}>New Delhi</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch Code:</span>
                    <span style={{ color: 'var(--text-dark)' }}>00691</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>IFSC Code:</span>
                    <span style={{ color: 'var(--text-dark)' }}>SBIN0000691</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>SWIFT Code:</span>
                    <span style={{ color: 'var(--text-dark)' }}>SBININBB104</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Branch Address:</span>
                    <span style={{ color: 'var(--text-dark)', maxWidth: '60%', textAlign: 'right' }}>State Bank of India, New Delhi Main Branch, FCRA Cell, 11 Sansad Marg New Delhi - 110001, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <div style={{ maxWidth: '800px', margin: '0 auto 64px auto' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                YOUR CONTRIBUTION MAKES A DIFFERENCE
              </h3>
              
              <form onSubmit={handleDonate} style={{ display: 'flex', flexDirection: 'column', gap: '24px', background: 'rgba(255, 255, 255, 0.95)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={donor.name} 
                      onChange={e => setDonor({ ...donor, name: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Your full name" 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={donor.email} 
                      onChange={e => setDonor({ ...donor, email: e.target.value })} 
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                      placeholder="Your email address" 
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={donor.phone} 
                    onChange={e => setDonor({ ...donor, phone: e.target.value })} 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                    placeholder="+91-XXXXXXXXXX" 
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '12px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Select Amount*</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                    {['500', '1000', '5000'].map((amt) => (
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
                    placeholder="Custom Amount" 
                    value={customAmount} 
                    onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(''); }} 
                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '1rem', marginBottom: '16px' }} 
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Upload Screenshot*</label>
                  <input 
                    type="file" 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Message (Optional)</label>
                  <textarea 
                    rows={4} 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }} 
                    placeholder="Write your message here....." 
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '1.1rem', background: 'linear-gradient(180deg, #D6B56C 0%, #b8860b 100%)', color: '#005495', fontWeight: '700' }}>
                  <Lock size={18} />
                  Make a Donation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
