import * as React from 'react';
import './style.css';
import data from './src/data/memes.json';
import DataView from './src/data-view';

export default function App() {
  return (
    <div>
      <h1>Memes</h1>

      <DataView data={data.data.memes} />
    </div>
  );
}
