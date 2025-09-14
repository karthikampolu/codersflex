export default function ServicesPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header - Same as other pages */}
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
          padding: '0 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
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
          </a>

          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <a href="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>HOME</a>
            <a href="/#solutions" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>SOLUTIONS</a>
           <a href="/services" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>SERVICES</a>
            <a href="/about" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>ABOUT US</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Contact Request&body=Hi, I am interested in your services." target="_blank" style={{
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

      {/* Main Content */}
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: '#f8fafc' }}>
        {/* Page Header */}
        <section style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)', padding: '80px 20px', color: 'white', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
              Our Services
            </h1>
            <p style={{ fontSize: '20px', opacity: '0.9', lineHeight: '1.6' }}>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section style={{ padding: '100px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              {/* YOUR SERVICE CARDS GO HERE - PASTE YOUR CODE BELOW */}
              
              {/* Service Card 1 */}
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  padding: '20px'
                }}>
                  <img 
                    src="/images/web-svgrepo-com.svg"
                    alt="Web Development Icon"
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
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>Custom Web Application Development</h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '25px'
                }}>Using Java Spring Boot, modern frameworks, and best practices to build scalable, high-performance apps.</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Web Development Inquiry&body=Hi, I am interested in your web development services." target="_blank" style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '12px 24px',
                  border: '1px solid #2563eb',
                  borderRadius: '6px',
                  display: 'inline-block'
                }}>Get Quote →</a>
              </div>

              {/* Service Card 2 */}
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  padding: '20px'
                }}>
                  <img 
                    src="/images/api_11230698.png"
                    alt="Backend API Icon"
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
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>Backend Systems & API Development</h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '25px'
                }}>Strong, efficient backend architectures that handle real-world scale and performance.</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Backend Development Inquiry&body=Hi, I am interested in your backend development services." target="_blank" style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '12px 24px',
                  border: '1px solid #2563eb',
                  borderRadius: '6px',
                  display: 'inline-block'
                }}>Get Quote →</a>
              </div>

              {/* Service Card 3 */}
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                  borderRadius: '12px',
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
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>Cybersecurity Services</h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '25px'
                }}>Including penetration testing, vulnerability assessments, security audits, compliance checks, and real-time threat monitoring.</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=Cybersecurity Inquiry&body=Hi, I am interested in your cybersecurity services." target="_blank" style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '12px 24px',
                  border: '1px solid #2563eb',
                  borderRadius: '6px',
                  display: 'inline-block'
                }}>Get Quote →</a>
              </div>

              {/* Service Card 4 */}
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  padding: '20px'
                }}>
                  <img 
                    src="/images/cloud-internet-internet-of-things-svgrepo-com.svg"
                    alt="IoT Security Icon"
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
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>IoT Security Consulting</h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#64748b',
                  marginBottom: '25px'
                }}>Securing connected devices and networks with specialized IoT and cybersecurity expertise.</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.codersflex@gmail.com&su=IoT Security Inquiry&body=Hi, I am interested in your IoT security services." target="_blank" style={{
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '12px 24px',
                  border: '1px solid #2563eb',
                  borderRadius: '6px',
                  display: 'inline-block'
                }}>Get Quote →</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
