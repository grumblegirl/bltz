import React from 'react';
import './Main.css';

import agentIcon from '../../assets/agent3.png';
import llmIcon from '../../assets/model_ai.png';
import mcpIcon from '../../assets/mcp.png';
import networkIcon from '../../assets/gateway.png';
import apiIcon from '../../assets/api2.png';
import identityIcon from '../../assets/thumb.png';
import accessIcon from '../../assets/access.png';
import discoveryIcon from '../../assets/magnifyingglass.png';
import chatIcon from '../../assets/chat.png';

import owaspIcon from '../../assets/owasp.png';
import mitreIcon from '../../assets/mitreatlas.png';
import isoIcon from '../../assets/iso42001.png';
import soc2Icon from '../../assets/soc2.png';
import nistIcon from '../../assets/nisrmf.png';

import runtimeImg from '../../assets/home/runtime.png';
import purpleteamImg from '../../assets/home/purpleteam.png';
import workspaceImg from '../../assets/home/workspace.png';
import shieldLogo from '../../assets/shield_logo.png';

const tickerItems = [
  { text: 'Agent', icon: agentIcon, invert: true },
  { text: 'LLM', icon: llmIcon, invert: true },
  { text: 'MCP', icon: mcpIcon, invert: true },
  { text: 'Network', icon: networkIcon, invert: true },
  { text: 'API Security', icon: apiIcon, invert: true, small: true },
  { text: 'Identity', icon: identityIcon, invert: true },
  { text: 'Access', icon: accessIcon },
  { text: 'Discovery', icon: discoveryIcon, invert: true },
  { text: 'ChatBot', icon: chatIcon, invert: true },
];

const Main = () => {
  return (
    <>
      <section className="main-hero">
        <div className="hero-content">
          <p className="hero-subtitle">Safe AI Adoption on Critical Infrastructure with</p>
          <h1 className="hero-title">AGENTIC DEFENSIVE AI SECURITY</h1>
        </div>
        <div className="feature-cards">
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <img src={runtimeImg} alt="Runtime" className="feature-card-img" />
            </div>
            <div className="feature-card-footer">
              <p className="feature-card-label">Runtime Shield</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <img src={purpleteamImg} alt="Purple Team" className="feature-card-img" />
            </div>
            <div className="feature-card-footer">
              <p className="feature-card-label">Purple Team</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <img src={workspaceImg} alt="Workspace" className="feature-card-img" />
            </div>
            <div className="feature-card-footer">
              <p className="feature-card-label">AI Governance</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="compliance-icons">
          <span className="tooltip-wrapper" data-tooltip="OWASP LLM TOP 10">
            <img src={owaspIcon} alt="OWASP" className="compliance-icon" />
          </span>
          <span className="tooltip-wrapper" data-tooltip="MITRE ATLAS">
            <img src={mitreIcon} alt="MITRE" className="compliance-icon" />
          </span>
          <span className="tooltip-wrapper" data-tooltip="ISO 42001">
            <img src={isoIcon} alt="ISO" className="compliance-icon" />
          </span>
          <span className="tooltip-wrapper" data-tooltip="SOC2">
            <img src={soc2Icon} alt="SOC2" className="compliance-icon grayscale" />
          </span>
          <span className="tooltip-wrapper" data-tooltip="NIST RMF">
            <img src={nistIcon} alt="NIST" className="compliance-icon" />
          </span>
        </div>
      </section>
      <section className="section-white">
        <div className="ticker-container">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
              <div key={index} className="ticker-item">
                {item.icon && <img src={item.icon} alt={item.text} className={`ticker-icon ${item.invert ? 'invert' : ''} ${item.small ? 'small' : ''}`} />}
                <span className="ticker-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <h2 className="section-title">Runtime Shield</h2>
        <p className="section-description">Bltz Runtime Shield enables complete visibility and protection for AI in production, discovering and monitoring all AI traffic at runtime while stopping prompt attacks, data leaks, and unsafe behavior with built-in AI governance and self-healing remediation.</p>
      </section>
    </>
  );
};

export default Main;
