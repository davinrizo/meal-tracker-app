import React from 'react';

export const dropdown = ({ options = [], ...props }) => (
  <select {...props}>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);
