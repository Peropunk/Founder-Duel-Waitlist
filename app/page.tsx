'use client'

import { useState } from 'react'

export default function FounderDuelWaitlist() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <main className="waitlist-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F462fdc1538bd468b99eec373dc088499%2F665bf725ea00486ab1376eb862539912?format=webp&width=800"
              alt="Founder Duel Logo"
              className="main-logo"
            />
          </div>

          <div className="taglines">
            <h1 className="main-tagline">Gamifying startup life — no faking it, only making it.</h1>
            <h2 className="sub-tagline">Startups as a game. Founders as players. Growth as the only way to win.</h2>
          </div>
        </div>
      </section>

      {/* Battle Cards Section */}
      <section className="battle-section">
        <div className="battle-arena">
          <div className="startup-card startup-left">
            <div className="company-info">
              <div className="company-logo-placeholder">
                <div className="logo-icon">🚀</div>
              </div>
              <h3 className="company-name">TechFlow</h3>
              <p className="company-stage">Series A</p>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-label">Revenue</span>
                <span className="stat-value">$2.4M</span>
              </div>
              <div className="stat">
                <span className="stat-label">Users</span>
                <span className="stat-value">45K</span>
              </div>
              <div className="stat">
                <span className="stat-label">Team</span>
                <span className="stat-value">23</span>
              </div>
              <div className="stat">
                <span className="stat-label">Funding</span>
                <span className="stat-value">$8M</span>
              </div>
            </div>
            <div className="health-bar">
              <div className="health-fill" style={{width: '75%'}}></div>
            </div>
          </div>

          <div className="vs-section">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F462fdc1538bd468b99eec373dc088499%2F5b1c578f4076487c8d66512c31cbe43a?format=webp&width=800"
              alt="Battle Sword"
              className="battle-sword"
            />
            <span className="vs-text">VS</span>
          </div>

          <div className="startup-card startup-right">
            <div className="company-info">
              <div className="company-logo-placeholder">
                <div className="logo-icon">⚡</div>
              </div>
              <h3 className="company-name">GrowthLab</h3>
              <p className="company-stage">Seed</p>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-label">Revenue</span>
                <span className="stat-value">$800K</span>
              </div>
              <div className="stat">
                <span className="stat-label">Users</span>
                <span className="stat-value">12K</span>
              </div>
              <div className="stat">
                <span className="stat-label">Team</span>
                <span className="stat-value">8</span>
              </div>
              <div className="stat">
                <span className="stat-label">Funding</span>
                <span className="stat-value">$2M</span>
              </div>
            </div>
            <div className="health-bar">
              <div className="health-fill" style={{width: '45%'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="waitlist-section">
        <div className="waitlist-container">
          <h2 className="waitlist-title">Join the Battle</h2>
          <p className="waitlist-description">
            Be among the first founders to enter the arena when Founder Duel launches.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="waitlist-form">
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join the waitlist"
                  className="email-input"
                  required
                />
                <button type="submit" className="submit-btn">
                  Enter Arena
                </button>
              </div>
            </form>
          ) : (
            <div className="success-message">
              <h3>Welcome to the Arena!</h3>
              <p>You've been added to the waitlist. Prepare for battle!</p>
            </div>
          )}
        </div>
      </section>

      {/* Spotify Section */}
      <section className="spotify-section">
        <div className="spotify-container">
          <iframe
            data-testid="embed-iframe"
            style={{borderRadius: '12px'}}
            src="https://open.spotify.com/embed/track/5gB2IrxOCX2j9bMnHKP38i?utm_source=generator"
            width="70%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Founder Duel. All rights reserved.</p>
      </footer>
    </main>
  )
}
