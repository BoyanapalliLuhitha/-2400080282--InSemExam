import React, { useState } from 'react';
const DATA = [
  { n: "Alice", s: 65000 },
  { n: "Bob", s: 110000 },
  { n: "Charlie", s: 72000 },
];
const SortableTable = () => {
  const [s, setS] = useState({ k: 'n', d: 'asc' }); 
  const sort = (key) => {
    let d = 'asc';
    if (s.k === key && s.d === 'asc') d = 'desc'; 
    setS({ k: key, d });
  };
  const sorted = [...DATA].sort((a, b) => {
    if (a[s.k] < b[s.k]) return s.d === 'asc' ? -1 : 1;
    if (a[s.k] > b[s.k]) return s.d === 'asc' ? 1 : -1;
    return 0;
  });
  const cellStyle = { padding: '5px', border: '1px solid #000' };
  return (
    <table style={{ borderCollapse: 'collapse', border: '1px solid #000' }}>
      <thead>
        <tr>
          {/* Header click handlers */}
          <th onClick={() => sort('n')} style={{ ...cellStyle, cursor: 'pointer' }}>Name {s.k==='n' ? (s.d==='asc'?'▲':'▼') : ''}</th>
          <th onClick={() => sort('s')} style={{ ...cellStyle, cursor: 'pointer' }}>Salary {s.k==='s' ? (s.d==='asc'?'▲':'▼') : ''}</th>
        </tr>
      </thead>
      <tbody>
        {/* Dynamic rendering with map() */}
        {sorted.map((item, i) => (
          // Alternating color: Green for odd rows
          <tr key={i} style={{ backgroundColor: i % 2 !== 0 ? '#e6ffe6' : '#fff' }}> 
            <td style={cellStyle}>{item.n}</td>
            <td style={cellStyle}>{item.s}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SortableTable;