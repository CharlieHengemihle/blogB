import React from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';
import { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('monteserrat');
  const [align, setAlign] = useState('right');
  const [text, setText] = useState('');
  // add useState calls here for title, subtitle, font, align, and text

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align, text }} />
      <Editor
        {...{
          title,
          setTitle,
          subtitle,
          setSubtitle,
          font,
          setFont,
          align,
          setAlign,
          text,
          setText,
        }}
      />
    </main>
  );
}
