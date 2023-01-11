import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, font }) {
  return (
    <div className={`preview ${font}`}>
      <h1> {title}</h1>
      <span> {subtitle}</span>
    </div>
  );
}
