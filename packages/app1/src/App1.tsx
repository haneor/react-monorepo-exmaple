import * as React from 'react';

export function App1({onChange}) {
  return (
    <div>
      <h1>App 1</h1>
      <input onChange={e => onChange(e.target.value)} />
    </div>
  );
}
