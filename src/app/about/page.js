export default function AboutPage() {
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
         <a href="/" style={{ 
  textDecoration: 'none', 
  display: 'flex', 
  alignItems: 'center', 
  gap: '10px',
  marginLeft: '-30px',// Add this line
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
</a>
          
          <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>HOME</a>
            <a href="/#solutions" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>SOLUTIONS</a>
           <a href="/services" style={{ color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>SERVICES</a>
            <a href="/about" style={{ textDecoration: 'none', color: '#2563eb', fontWeight: '600' }}>ABOUT US</a>
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

      {/* About Us Content */}
      <section style={{
        background: '#ffffff',
        padding: '120px 20px',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Page Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '20px'
            }}>About CodersFlex</h1>
            <div style={{
              width: '100px',
              height: '4px',
              background: '#2563eb',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

                    {/* Company Story */}
            <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginBottom: '120px'
            }}>
            {/* Left Content */}
            <div>
                <h2 style={{
                fontSize: '36px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '30px',
                lineHeight: '1.3'
                }}>Building Powerful, Secure & Future-Proof Digital Solutions</h2>
                
                <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#64748b',
                marginBottom: '25px'
                }}>
                At CodersFlex, we're all about building powerful, secure, and future-proof digital solutions. 
                Whether it's developing robust backend systems or locking down your tech infrastructure, we've got it covered.
                </p>

                <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#64748b',
                marginBottom: '25px'
                }}>
                We're a duo of tech enthusiasts who've teamed up to make great things happen in the world of 
                development and cybersecurity. We specialize in end-to-end software development and comprehensive 
                cybersecurity services, helping startups, SMEs, and enterprises scale with confidence.
                </p>

                <p style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2563eb',
                fontStyle: 'italic'
                }}>
                From idea to execution—and protection—we're there at every step.
                </p>
            </div>

            {/* Right Visual - THIS WAS MISSING! */}
            <div style={{
                background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div>
                <div style={{
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 30px',
                    fontSize: '60px',
                    color: 'white',
                    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)'
                }}>🛡️</div>
                <h3 style={{
                    fontSize: '28px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '15px'
                }}>Two Experts, One Vision</h3>
                <p style={{
                    color: '#64748b',
                    fontSize: '16px',
                    lineHeight: '1.6'
                }}>Development & Security under one roof</p>
                </div>
            </div>
            </div>


          {/* Meet Our Founders Section */}
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
            borderRadius: '20px',
            padding: '80px 40px',
            marginBottom: '120px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '20px'
              }}>Meet Our Founders</h2>
              <p style={{
                fontSize: '18px',
                color: '#64748b'
              }}>The visionaries behind CodersFlex</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '50px'
            }}>
              {/* Founder 1 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
              }}>
                {/* Photo Placeholder */}
               <img 
            src="/images/Govinda_Sharma.png"
            alt="Govind Sharma - Founder"
            style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 30px',
                display: 'block'
            }}
            />
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '10px'
                }}>Govind Sharma</h3>
                <p style={{
                  fontSize: '16px',
                  color: '#2563eb',
                  fontWeight: '500',
                  marginBottom: '20px'
                }}>Founder</p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#64748b',
                  fontStyle: 'italic'
                }}>
                  Govind holds a BCA in IoT, a Postgraduate degree in Cyber Security and Digital Forensics, and an ISO 27001 IT audit certification.
                 He has published research papers and specializes in penetration testing, IT audits, and vulnerability management, ensuring secure and compliant systems for clients.
                </p>
              </div>

              {/* Founder 2 */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
              }}>
                {/* Photo Placeholder */}
                    <img 
            src="/images/Ankur.png"
            alt="Ankur-Founder"
            style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 30px',
                display: 'block'
            }}
            />
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '10px'
                }}>Ankur Joshi</h3>
                <p style={{
                  fontSize: '16px',
                  color: '#2563eb',
                  fontWeight: '500',
                  marginBottom: '20px'
                }}>Founder </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#64748b',
                  fontStyle: 'italic'
                }}>
                  Ankur specializes in Java Spring Boot, full-stack development, and scalable system design. With a focus on clean,
                   efficient, and high-performance solutions,
                   he excels at simplifying complex problems into reliable, elegant code.
                </p>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <div style={{ marginBottom: '100px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#1e293b',
              textAlign: 'center',
              marginBottom: '60px'
            }}>What We Offer</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
            {/* Service cards with custom icons */}
            <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0'
            }}>
            <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                padding: '15px'
            }}>
                <img 
                src="/images/web-svgrepo-com.svg"
                alt="Web Development Icon"
                style={{
                    width: '30px',
                    height: '30px',
                    filter: 'brightness(0) invert(1)'
                }}
                />
            </div>
            <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
            }}>Custom Web Application Development</h4>
            <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#64748b'
            }}>Using Java Spring Boot, modern frameworks, and best practices to build scalable, high-performance apps.</p>
            </div>

            <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0'
            }}>
            <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                padding: '15px'
            }}>
                <img 
                src="/images/api_11230698.png"
                alt="Backend API Icon"
                style={{
                    width: '30px',
                    height: '30px',
                    filter: 'brightness(0) invert(1)'
                }}
                />
            </div>
            <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
            }}>Backend Systems & API Development</h4>
            <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#64748b'
            }}>Strong, efficient backend architectures that handle real-world scale and performance.</p>
            </div>

            <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0'
            }}>
            <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                padding: '15px'
            }}>
                <img 
                src="/images/threat-management-svgrepo-com.svg" 
                alt="Cybersecurity Icon"
                style={{
                    width: '30px',
                    height: '30px',
                    filter: 'brightness(0) invert(1)'
                }}
                />
            </div>
            <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
            }}>Cybersecurity Services</h4>
            <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#64748b'
            }}>Including penetration testing, vulnerability assessments, security audits, compliance checks, and real-time threat monitoring.</p>
            </div>

            <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0'
            }}>
            <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                padding: '15px'
            }}>
                <img 
              src= " /images/cloud-internet-internet-of-things-svgrepo-com.svg"
                alt="IoT Security Icon"
                style={{
                    width: '30px',
                    height: '30px',
                    filter: 'brightness(0) invert(1)'
                }}
                />
            </div>
            <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '15px'
            }}>IoT Security Consulting</h4>
            <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#64748b'
            }}>Securing connected devices and networks with specialized IoT and cybersecurity expertise.</p>
            </div>

            </div>
          </div>

            {/* Why Choose CodersFlex */}
            <div style={{
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
            borderRadius: '20px',
            padding: '60px 40px',
            textAlign: 'center'
            }}>
            <h2 style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '20px'
            }}>Why Choose CodersFlex?</h2>
            <p style={{
                fontSize: '18px',
                color: '#64748b',
                marginBottom: '50px',
                fontStyle: 'italic'
            }}>Our Unique Selling Proposition</p>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px'
            }}>
                {/* USP 1 - Two Experts, One Vision */}
                <div>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    padding: '20px'
                }}>
                    <img 
                   src="/images/handshake-svgrepo-com.svg"
                    alt="Partnership Icon"
                    style={{
                        width: '40px',
                        height: '40px',
                        filter: 'brightness(0) invert(1)'
                    }}
                    />
                </div>
                <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '15px'
                }}>Two Experts, One Vision</h4>
                <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#64748b'
                }}>You get both development and security under one roof—no need to juggle multiple vendors.</p>
                </div>

                {/* USP 2 - Tailored Solutions */}
                <div>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    padding: '20px'
                }}>
                    <img 
                     src="/images/target-arrow-svgrepo-com.svg"
                    alt="Target Solution Icon"
                    style={{
                        width: '40px',
                        height: '40px',
                        filter: 'brightness(0) invert(1)'
                    }}
                    />
                </div>
                <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '15px'
                }}>Tailored Solutions</h4>
                <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#64748b'
                }}>We don't offer cookie-cutter services. Everything we do is customized to your business goals.</p>
                </div>

                {/* USP 3 - Built to Scale */}
                <div>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    padding: '20px'
                }}>
                    <img 
                    src="/images/rocket-svgrepo-com.svg"
                    alt="Scale Growth Icon"
                    style={{
                        width: '40px',
                        height: '40px',
                        filter: 'brightness(0) invert(1)'
                    }}
                    />
                </div>
                <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '15px'
                }}>Built to Scale, Secured to Last</h4>
                <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#64748b'
                }}>We build systems designed for growth and lock them down with battle-tested security practices.</p>
                </div>

                {/* USP 4 - Tech That Talks Business */}
                <div>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    padding: '20px'
                }}>
                    <img 
                    src="/images/bag-shopping-svgrepo-com.svg"
                    alt="Business Tech Icon"
                    style={{
                        width: '40px',
                        height: '40px',
                        filter: 'brightness(0) invert(1)'
                    }}
                    />
                </div>
                <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '15px'
                }}>Tech That Talks Business</h4>
                <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#64748b'
                }}>We speak your language—whether it's performance, ROI, or risk mitigation.</p>
                </div>
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
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Healthcare</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Education</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Financial Services</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Technology</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '600', marginBottom: '25px' }}>Solutions</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Cybersecurity</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Software Development</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>IT Consultation</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#fbbf24', fontSize: '18px', fontWeight: '600', marginBottom: '25px' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Web Development</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Mobile App Development</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '14px' }}>Security Assessment</a></li>
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
