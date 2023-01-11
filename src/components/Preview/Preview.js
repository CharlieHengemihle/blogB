import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle }) {
  return (
    <div className={`preview ${title}`}>
      <h1> {title}</h1>
      <span> {subtitle}</span>
    </div>
  );
}
