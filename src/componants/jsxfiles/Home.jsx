import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers,  FaLightbulb, FaCogs, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaIdBadge, FaPrint, FaMobileAlt, FaLaptopCode, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUserTie, FaBuilding, FaHandshake, FaStar, FaWhatsapp, FaPinterest } from 'react-icons/fa';
import '../cssfiles/Home.css'; 

export default function Home() {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

 
  const services = [
    { name: 'Branding & Identity Design', path: '/s1', icon: <FaIdBadge /> },
    { name: 'Print & Publication Design', path: '/s2', icon: <FaPrint /> },
    { name: 'Digital & Social Media Design', path: '/s3', icon: <FaMobileAlt /> },
    { name: 'UI/UX & Web Design', path: '/s4', icon: <FaLaptopCode /> },
  ];

 
  const clientIcons = [
    <FaUserTie key="client1" title="Business Client" />,
    <FaBuilding key="client2" title="Corporate Client" />,
    <FaHandshake key="client3" title="Partner Client" />,
    <FaStar key="client4" title="Premium Client" />
  ];

  if (showWelcome) {
    return (
      <div className="welcome-screen">
        <div className="welcome-message">
          <h1 className="welcome-text">Welcome to Design Kinetic</h1>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-wrapper">
     
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

     
      <section className="hero-section">
        <h1 className="hero-title">
          <span className="title-word title-word-1">Design</span>
          <span className="title-word title-word-2">Kinetic</span>
        </h1>
        <p className="hero-subtitle">Transforming visions into visual success</p>
      </section>

      
      <main className="main-content">
      
        <div className="content-column content-left">
         <article className="info-card about-card">
  <div className="card-header">
    <h2>INTRODUCTION</h2>
    <div className="header-decoration"></div>
  </div>
  <div className="card-content">
    <p>Design Kinetics is a professional graphic design agency that delivers highly creative and flexible visual solutions to meet the branding and marketing needs of modern businesses.</p>
    <p>From impactful thumbnails and posters to brochures, logos, and complete brand identities – our designs speak your brand's language.</p>
    <div className="teamwork-icons">
      <FaUsers style={{ fontSize: '2rem', margin: '1rem' }} />
      <FaHandshake style={{ fontSize: '2rem', margin: '1rem' }} />
      <FaLightbulb style={{ fontSize: '2rem', margin: '1rem' }} />
      <FaCogs style={{ fontSize: '2rem', margin: '1rem' }} />
    </div>
  </div>
</article>


          <article className="info-card bio-card">
  <div className="card-header">
    <h2>BIO</h2>
    <div className="header-decoration"></div>
  </div>
  <div className="card-content">
    <ul className="bio-list">
      <li className="bio-item">Team of creatives from Khwaja Fareed University of Engineering & Information Technology (KFUEIT), Rahim Yar Khan</li>
      <li className="bio-item">Bachelor's degree in Graphics Designing</li>
      <li className="bio-item">Founders of DesignKinetics, a dynamic design agency</li>
    </ul>
    <div className="certification-logos">
      <img src="/KFUITLOGO.png" alt="KFUEIT Logo" className="cert-logo" />
     <img src="/FCA.png" alt="KFUEIT Logo" className="cert-logo" />
   
    </div>
  </div>
</article>

        </div>

    
        <div className="content-column content-center">
          <section className="services-section">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              My Services
              <span className="title-decoration"></span>
            </h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <article 
                  key={index}
                  className="service-card"
                  onClick={() => navigate(service.path)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.name}</h3>
                  <div className="service-hover-effect"></div>
                </article>
              ))}
            </div>
          </section>

          <section className="clients-section">
            <h3 className="clients-title">Trusted By</h3>
            <div className="client-logos">
              {clientIcons.map((icon, i) => (
                <span key={i} className="client-logo">{icon}</span>
              ))}
            </div>
          </section>
        </div>

       
        <div className="content-column content-right">
          <article className="info-card social-card">
            <div className="card-header">
              <h2>SOCIAL MEDIA</h2>
              <div className="header-decoration"></div>
            </div>
            <div className="card-content">
              <div className="social-links">
                {[
                  { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/desig_nkinetic/?utm_source=qr&r=nametag' },
                  { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/share/16yUpjBUKy/' },
                   { name: 'Whatsapp', icon: <FaWhatsapp />, url: 'https://wa.me/923706109259' },
                 { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/designkinetic/about/?viewAsMember=true' },
                  { name: 'YouTube', icon: <FaYoutube />, url: 'https://www.youtube.com/@Design-v1w' },
                  { name: 'Pinterest', icon: <FaPinterest/>, url: 'https://www.pinterest.com/design_kinetic' }

                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </article>

          <article className="info-card contact-card">
            <div className="card-header">
              <h2>CONTACT</h2>
              <div className="header-decoration"></div>
            </div>
            <div className="card-content">
  <address className="contact-info">
    <div className="contact-item">
      <span className="contact-icon"><FaEnvelope /></span>
      <a href="mailto:info@designkinetic.com">
        <span>info@designkinetic.com</span>
      </a>
    </div>
    <div className="contact-item">
      <span className="contact-icon"><FaPhoneAlt /></span>
      <a href="tel:+923706109259">
        <span>+92 370 6109259</span>
      </a>
    </div>
    <div className="contact-item">
      <span className="contact-icon"><FaMapMarkerAlt /></span>
      <span>Lahore pakistan </span>
    </div>
  </address>
</div>

          </article>
        </div>
      </main>

     
      <footer className="page-footer">
        <p className="copyright">© {new Date().getFullYear()} Design Kinetic. All rights reserved.</p>
        <p className='copyright' >this website is design by Kataria_web_production</p>
      </footer>
    </div>
  );
}