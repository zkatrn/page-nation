import * as React from 'react';
import './style.css';
import data from './src/data';
import DataView from './src/data-view';

export default function App() {
  return (
    <div>
      <h1>My Pages</h1>
      <p>Hello, World :)</p>

      <DataView data={data} />
    </div>
  );
}
