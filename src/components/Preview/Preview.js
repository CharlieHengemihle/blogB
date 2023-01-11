import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, font, align, text }) {
  return (
    <div className={`preview ${font}`} style={{ textAlign: align }}>
      <h1> {title}</h1>
      <span> {subtitle}</span>
      <p> {text}</p>
    </div>
  );
}
