import React from 'react';

export const Card = ({ children, className = '', style = {}, ...props }) => (
  <div className={`neo-card ${className}`} style={style} {...props}>
    {children}
  </div>
);

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClass = 'neo-btn';
  const variantClass = variant === 'primary' ? 'neo-btn-primary' : '';
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Input = ({ label, id, ...props }) => (
  <div className="mb-4">
    {label && <label htmlFor={id} className="neo-label">{label}</label>}
    <input id={id} className="neo-input" {...props} />
  </div>
);

export const Badge = ({ children, variant = 'chasing', className = '' }) => {
  return (
    <span className={`neo-badge ${variant} ${className}`}>
      {children}
    </span>
  );
};

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
        zIndex: 50, display: 'flex', alignItems: 'center', 
        justifyContent: 'center', padding: '1rem', 
        backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)'
      }}
    >
      <div 
        className="neo-card" 
        style={{ 
          width: '100%', maxWidth: '32rem', position: 'relative', 
          maxHeight: '90vh', overflowY: 'auto' 
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{title}</h2>
          <Button variant="outline" onClick={onClose} style={{ padding: '0.25rem 0.5rem', boxShadow: '2px 2px 0px #000' }}>✕</Button>
        </div>
        {children}
      </div>
    </div>
  );
};
