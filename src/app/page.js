import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{
        background: '#ffffff',
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '15px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Link href="/" style={{ 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          marginLeft: '-30px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px'
          }}>
            <img 
              src="/images/logo.png" 
              alt="CodersFlex Logo"
              style={{
                width: '30px',
                height: '24px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </div>
          <div>
            <div style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e293b',
              lineHeight: '1'
            }}>CodersFlex</div>
            <div style={{
              fontSize: '12px',
              color: '#64748b',
              fontStyle: 'italic',
              marginTop: '2px'
            }}>Communicate. Collaborate. Create.</div>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link href="/#home" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>HOME</Link>
          <Link href="/#solutions" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>SOLUTIONS</Link>
          <Link href="/services" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>SERVICES</Link>
          <Link href="/about" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>ABOUT US</Link>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Consultation Request&body=Hi, I would like to discuss my project requirements." target="_blank" style={{
            background: '#2563eb',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600'
          }}>CONTACT</a>
        </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: '70px'
      }} id="home">
        <div style={{
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '54px',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '20px'
          }}>Cybersecurity & Digital Solutions for Modern Businesses</h1>
          <p style={{
            fontSize: '20px',
            marginBottom: '40px',
            opacity: '0.9'
          }}>Secure your Business</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Consultation Request&body=Hi, I would like to discuss my project requirements." target="_blank" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>Talk to our Consultant</a>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{
        background: '#ffffff',
        padding: '100px 20px',
        marginTop: '-50px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            padding: '60px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center', flex: '1' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#2563eb',
                marginBottom: '10px'
              }}>50+</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
              }}>Businesses</h3>
              <p style={{
                color: '#64748b',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>We helped 50+ Businesses and Institutions in empowering their business</p>
            </div>
            
            <div style={{
              width: '1px',
              height: '120px',
              background: '#e2e8f0'
            }}></div>
            
            <div style={{ textAlign: 'center', flex: '1' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#2563eb',
                marginBottom: '10px'
              }}>100+</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
              }}>Projects</h3>
              <p style={{
                color: '#64748b',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>We have successfully executed 100+ projects for various clients</p>
            </div>
            
            <div style={{
              width: '1px',
              height: '120px',
              background: '#e2e8f0'
            }}></div>
            
            <div style={{ textAlign: 'center', flex: '1' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#2563eb',
                marginBottom: '10px'
              }}>200+</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
              }}>Secure</h3>
              <p style={{
                color: '#64748b',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>State of the art security solutions across enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{
        background: '#f8fafc',
        padding: '120px 20px'
      }} id="solutions">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '20px'
            }}>Our Solutions</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* Cybersecurity Card */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                padding: '20px'
              }}>
                <img 
                  src="/images/threat-management-svgrepo-com.svg"
                  alt="Cybersecurity Icon"
                  style={{
                    width: '40px',
                    height: '40px',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#1e293b'
              }}>Cybersecurity</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '25px',
                color: '#64748b'
              }}>5+ Customers built their Security Infrastructure with us.</p>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#2563eb'
              }}>Price: Starts From RS 9999</div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Cybersecurity Inquiry&body=Hi, I am interested in your cybersecurity services." target="_blank" style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 24px',
                border: '1px solid #2563eb',
                borderRadius: '6px',
                display: 'inline-block'
              }}>Know More →</a>
            </div>
            
            {/* Software Development Card */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                padding: '20px'
              }}>
                <img 
                  src="/images/code-1-svgrepo-com.svg"
                  alt="Software Development Icon"
                  style={{
                    width: '40px',
                    height: '40px',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#1e293b'
              }}>Software Development</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '25px',
                color: '#64748b'
              }}>10+ Businesses built their Digital Presence and Custom Solutions.</p>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#2563eb'
              }}>Price: Starts From RS 19999</div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Software Development Inquiry&body=Hi, I am interested in your software development services." target="_blank" style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 24px',
                border: '1px solid #2563eb',
                borderRadius: '6px',
                display: 'inline-block'
              }}>Know More →</a>
            </div>
            
            {/* IT Consultation Card */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                padding: '20px'
              }}>
                <img 
                  src="/images/consultant_11934213.png"
                  alt="IT Consultation Icon"
                  style={{
                    width: '40px',
                    height: '40px',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#1e293b'
              }}>IT Consultation</h3>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '25px',
                color: '#64748b'
              }}>Customers use our solution to manage their technology efficiently.</p>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#2563eb'
              }}>Price: Starts From RS 19999</div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=IT Consultation Inquiry&body=Hi, I am interested in your IT consultation services." target="_blank" style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: '500',
                padding: '12px 24px',
                border: '1px solid #2563eb',
                borderRadius: '6px',
                display: 'inline-block'
              }}>Know more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1e293b',
        color: '#e2e8f0',
        padding: '80px 20px 40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px'
        }}>
          <div>
            <h3 style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '600', marginBottom: '25px' }}>Industries</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Healthcare</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Education</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Financial Services</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Technology</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '600', marginBottom: '25px' }}>Solutions</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Cybersecurity</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Software Development</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>IT Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '600', marginBottom: '25px' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Web Development</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Mobile App Development</Link></li>
              <li style={{ marginBottom: '12px' }}><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Security Assessment</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '600', marginBottom: '25px' }}>Customer Service</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '8px' }}>+91 – 81 82 83 8888</p>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '8px' }}>+91 – 88 83 33 0419</p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com" 
              target="_blank"
              style={{ 
                color: '#cbd5e1', 
                fontSize: '14px', 
                marginBottom: '20px',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              info.codersflex@gmail.com
            </a>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '30px',
          textAlign: 'center',
          marginTop: '50px'
        }}>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>© 2025 CodersFlex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
