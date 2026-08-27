import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { ShieldCheck, Lock, Upload } from 'lucide-react';
import { asset } from '../utils/asset';

const familyMembers = [
  { name: 'C. James White', role: 'Founder' },
  { name: 'Mrs. Vijaya James White', role: 'Co-founder' },
  { name: 'Stanley Dev Ada', role: 'Son' },
  { name: 'Sharon Doris Angel J.', role: 'Daughter' },
];

const tiers = [
  {
    label: 'BASIC SUPPORT',
    amount: '₹ 500',
    perks: ['Local Programs', 'Peace Literature'],
  },
  {
    label: 'GROWTH SUPPORT',
    amount: '₹ 1000',
    perks: ['Multilingual Trans', 'Sponsor Peace Events'],
  },
  {
    label: 'SPONSOR INITIATIVE',
    amount: '₹ 5000',
    perks: ['Impact Reports', 'VIP Event Access'],
  },
];

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
      <PageHero title="DONATE US" subtitle="SUPPORT THE MISSION OF LOVE" />

      {/* Main Content */}
      <section style={{ position: 'relative', minHeight: '600px' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="container">
            {/* The Founding Family of God Cares Ministries */}
            <div style={{ maxWidth: '960px', margin: '0 auto 64px auto' }}>
              <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '8px' }}>
                The Founding Family of God Cares Ministries
              </h2>
              <div style={{ width: '90px', height: '4px', background: 'var(--accent-gold)', borderRadius: '2px', margin: '0 auto 32px auto' }} />
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'center' }}>
                God Cares Ministries was established through the vision, sacrifice, and unwavering commitment of one family dedicated to serving humanity with compassion, integrity, and hope. From its very beginning, the ministry has been sustained through their personal dedication, resources, and steadfast commitment to improving lives and promoting universal values that strengthen individuals, families, and communities.
              </p>
            </div>

            {/* The Founding Family Members */}
            <div style={{ maxWidth: '1100px', margin: '0 auto 64px auto' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '28px', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                The Founding Family
              </h3>
              <div className="grid-4">
                {familyMembers.map((m) => (
                  <div key={m.name} className="card-item" style={{ textAlign: 'center', padding: '32px 24px' }}>
                    <div style={{ width: '76px', height: '76px', borderRadius: '50%', background: 'linear-gradient(180deg, var(--sky-blue-top) 0%, var(--sky-blue-bottom) 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px auto', fontSize: '1.6rem', fontFamily: 'var(--font-heading-fancy)' }}>
                      {m.name.charAt(0)}
                    </div>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.25rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '6px', textTransform: 'uppercase' }}>{m.name}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{m.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Family Narrative */}
            <div style={{ maxWidth: '960px', margin: '0 auto 64px auto' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                From the earliest days of the ministry, the founding family has wholeheartedly devoted their time, talents, resources, and personal family savings to establish and sustain its work. Through many challenges and personal sacrifices, they have remained steadfast in their commitment to expanding the ministry's educational, humanitarian, and community service initiatives.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Throughout its journey, God Cares Ministries has progressed largely through the perseverance and dedication of its founding family. Their vision has always been to serve humanity with sincerity, compassion, and practical care while encouraging values that promote truth, love, justice, peace, responsibility, kindness, integrity, and mutual respect.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Today, the ministry carries out its mission through educational initiatives, humanitarian outreach, community development, and the production of multilingual audio-visual resources designed to inspire hope, strengthen moral and ethical values, and encourage positive transformation in individuals and society.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Among its major initiatives are The Universal Royal Law of Love and The Holy Sabbath—educational projects that encourage thoughtful reflection on timeless principles that promote love, compassion, justice, responsibility, integrity, respect for one another, and reverence for the Creator. These initiatives seek to foster understanding, meaningful dialogue, and peaceful coexistence among people of every nation, culture, language, and community.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                The founding family's desire has never been personal recognition or material gain. Their greatest fulfilment comes from seeing lives transformed through education, compassionate service, and opportunities that bring hope, dignity, encouragement, and a brighter future to individuals and families facing hardship.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Looking to the future, they aspire to produce high-definition multilingual audio-visual resources and educational materials that can be freely accessed by people throughout the world. Their vision is to make these resources available in as many languages as possible so that people from diverse cultures and backgrounds may benefit from messages that promote truth, love, compassion, justice, peace, responsible living, and mutual respect.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                The founding family warmly invites compassionate individuals, families, organisations, institutions, and well-wishers to partner with God Cares Ministries in advancing this mission of education, humanitarian service, and community development.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Your encouragement, participation, and generous financial support help expand educational initiatives, develop multilingual audio-visual resources, strengthen humanitarian outreach, and extend practical assistance to individuals and families experiencing poverty, hardship, and crisis.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Together, we can provide nutritious food for hungry families, essential medical care and life-saving medicines for the sick, clothing for those in need, educational assistance for underprivileged children, and support to repair or rebuild unsafe homes that leave families vulnerable to rain, extreme weather, and unsafe living conditions.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                God Cares Ministries serves all people without discrimination, regardless of caste, colour, creed, religion, nationality, language, ethnicity, community, gender, age, social status, or economic condition. Our humanitarian services are offered with compassion, respect, fairness, and a commitment to upholding the dignity, worth, and well-being of every human being.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Every contribution—whether through prayer, encouragement, volunteering, professional expertise, or financial support—helps restore hope, improve lives, and create opportunities for individuals and communities to flourish. Each act of generosity becomes an investment in a future built upon compassion, dignity, justice, mutual care, and lasting hope.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '32px', fontSize: '1.05rem' }}>
                Together, we can build stronger families, healthier communities, and a more compassionate world by promoting universal values that unite rather than divide, bringing hope, practical support, and positive transformation wherever they are needed most.
              </p>
              <p style={{ color: 'var(--primary-dark-blue)', lineHeight: '1.9', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '700', textAlign: 'center', fontStyle: 'italic' }}>
                Serving humanity with truth, love, compassion, justice, peace, and hope.
              </p>
            </div>

            {/* Support Our Mission — Tiers */}
            <div style={{ maxWidth: '1100px', margin: '0 auto 64px auto' }}>
              <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '8px' }}>
                Support Our Mission
              </h2>
              <div style={{ width: '90px', height: '4px', background: 'var(--accent-gold)', borderRadius: '2px', margin: '0 auto 24px auto' }} />
              <p style={{ fontSize: '1.6rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textAlign: 'center', letterSpacing: '1px' }}>
                Your Support Can Change Lives
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px', textAlign: 'center', fontSize: '1.05rem' }}>
                Every contribution helps us continue our mission of love, service, and hope for a better tomorrow.
              </p>

              <div className="grid-3">
                {tiers.map((t) => (
                  <div key={t.label} className="card-item" style={{ textAlign: 'center', padding: '40px 32px', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '12px' }}>{t.label}</span>
                    <div style={{ fontSize: '2.6rem', fontWeight: '900', color: 'var(--primary-blue)', margin: '4px 0 20px 0', fontFamily: 'var(--font-heading-fancy)' }}>{t.amount}</div>
                    <ul style={{ listStyle: 'none', fontSize: '0.98rem', color: 'var(--text-muted)', marginBottom: '28px', lineHeight: '2', flex: 1 }}>
                      {t.perks.map((p) => (
                        <li key={p}>✓ {p}</li>
                      ))}
                    </ul>
                    <NavLink to="/donate-us" className="btn-secondary" style={{ width: '100%' }}>
                      Donate Now
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            {/* Scan & Donate */}
            <div style={{ maxWidth: '1100px', margin: '0 auto 64px auto', textAlign: 'center' }}>
              <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '8px' }}>
                Scan &amp; Donate
              </h2>
              <div style={{ width: '90px', height: '4px', background: 'var(--accent-gold)', borderRadius: '2px', margin: '0 auto 24px auto' }} />
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.05rem', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
                Donations made to God Cares Ministries are eligible for tax exemption in accordance with applicable laws. Official donation receipts will be provided for eligible contributions.
              </p>

              <div className="grid-2">
                <div className="card-item" style={{ textAlign: 'left', display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <img
                    src={asset('/donate-us-assets/p0_img3_x3538.png')}
                    alt="State Bank of India - Scan to Donate"
                    style={{ width: '170px', height: 'auto', flexShrink: 0, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)', background: '#fff' }}
                  />
                  <div>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.2rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '10px', textTransform: 'uppercase' }}>State Bank of India</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                      This State Bank of India Current Account is maintained solely for charitable, humanitarian, and ministry purposes.
                    </p>
                  </div>
                </div>

                <div className="card-item" style={{ textAlign: 'left', display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <img
                    src={asset('/donate-us-assets/p0_img2_x3534.png')}
                    alt="Canara Bank - Scan to Donate"
                    style={{ width: '170px', height: 'auto', flexShrink: 0, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)', background: '#fff' }}
                  />
                  <div>
                    <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.2rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '10px', textTransform: 'uppercase' }}>Canara Bank</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7' }}>
                      This Canara Bank Current Account is designated exclusively for participation, enrolment and voluntary support for "The Universal Royal Law of Love" Project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Contribution Makes a Difference — Donation Form */}
            <div style={{ maxWidth: '820px', margin: '0 auto 64px auto' }}>
              <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '8px' }}>
                Your Contribution Makes a Difference
              </h2>
              <div style={{ width: '90px', height: '4px', background: 'var(--accent-gold)', borderRadius: '2px', margin: '0 auto 32px auto' }} />

              <form onSubmit={handleDonate} style={{ display: 'flex', flexDirection: 'column', gap: '22px', background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', boxShadow: 'var(--shadow-sm)' }}>
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
                    style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '1rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Upload Screenshot*</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Upload size={18} color="var(--primary-blue)" />
                    <input
                      type="file"
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem', background: '#fff' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--primary-dark-blue)' }}>Message (Optional)</label>
                  <textarea
                    rows={4}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-card)', fontSize: '0.95rem' }}
                    placeholder="Write your message here....."
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '1.1rem' }}>
                  <Lock size={18} />
                  Make a Donation
                </button>
              </form>
            </div>

            {/* For Foreign Donors */}
            <div style={{ maxWidth: '960px', margin: '0 auto 64px auto' }}>
              <div className="card-item" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark-blue)', fontFamily: 'var(--font-heading-fancy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  For Foreign Donors
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.98rem' }}>
                  Designated FCRA Receipt-cum-Utilisation Account
                </p>
                <div style={{ display: 'grid', gap: '12px', fontSize: '0.98rem' }}>
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

            {/* Support the Family Behind This Mission */}
            <div style={{ maxWidth: '960px', margin: '0 auto 64px auto' }}>
              <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '8px' }}>
                "Support the Family Behind This Mission"
              </h2>
              <div style={{ width: '90px', height: '4px', background: 'var(--accent-gold)', borderRadius: '2px', margin: '0 auto 32px auto' }} />
              <img
                src={asset('/donate-us-assets/p0_img0_x3530.png')}
                alt="The Founding Family of God Cares Ministries"
                style={{ display: 'block', width: '100%', maxWidth: '420px', height: 'auto', margin: '0 auto 32px auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', boxShadow: 'var(--shadow-md)' }}
              />
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                For many years, the founding family of God Cares Ministries has sustained the ministry through personal sacrifice, dedicating not only their time, talents, and energy, but also their family savings and a significant portion of their personal income. Believing deeply in the mission entrusted to them, C. James White made the life-changing decision to leave his employment in order to devote himself full-time to the ministry. Since then, the family has consistently placed the mission above personal comfort, often carrying substantial financial responsibilities so that the ministry's educational, humanitarian, and community service initiatives could continue without interruption.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                These ongoing sacrifices have placed considerable financial strain on the family. Yet they remain steadfast in their commitment to serving others, continuing the ministry's work with faith, perseverance, compassion, and hope despite many challenges.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                If the mission and values of God Cares Ministries have touched your heart, we warmly invite you to consider supporting both the ministry and its founding family. Your generous contribution will help meet the family's essential living expenses, enable them to continue their full-time service, and strengthen the ministry's ongoing educational initiatives, humanitarian outreach, multilingual audio-visual productions, and assistance to individuals, families, and communities experiencing poverty and hardship.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Every gift, whether large or small, is deeply appreciated. Your generosity not only helps sustain those who have dedicated their lives to this work but also enables this mission of compassion, education, and humanitarian service to continue reaching people with hope, practical care, knowledge, and opportunities for a better future.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '24px', fontSize: '1.05rem' }}>
                Thank you for standing with God Cares Ministries and its founding family. Your kindness, encouragement, and support become part of a shared commitment to serving humanity with truth, love, compassion, justice, peace, and hope. Together, we can continue extending this mission of service and making a lasting difference in the lives of many.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', marginBottom: '8px', fontSize: '1.05rem' }}>
                Bank details and QR code for contributions are provided below. We sincerely thank you for your kindness, goodwill, prayers, and support.
              </p>
            </div>

            {/* Bank Details */}
            <div style={{ maxWidth: '960px', margin: '0 auto 32px auto' }}>
              <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '8px' }}>
                Bank Details
              </h2>
              <div style={{ width: '90px', height: '4px', background: 'var(--accent-gold)', borderRadius: '2px', margin: '0 auto 32px auto' }} />

              <div className="card-item" style={{ padding: '40px' }}>
                <h4 style={{ color: 'var(--primary-dark-blue)', fontSize: '1.3rem', fontFamily: 'var(--font-heading-fancy)', marginBottom: '20px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={22} color="var(--accent-gold)" /> For Indian Donors
                </h4>
                <div style={{ display: 'grid', gap: '12px', fontSize: '0.98rem' }}>
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
                    <span style={{ color: 'var(--text-dark)', maxWidth: '60%', textAlign: 'right' }}>No.2, A Muni Reddy Layout, Horamavu Main, Bangalore.</span>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
