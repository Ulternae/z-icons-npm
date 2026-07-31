import React from 'react';

export const LanImageSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-62.1-62.1c3.3-7.7 5.1-16.2 5.1-25.1V96c0-35.3-28.7-64-64-64H128c-8.9 0-17.4 1.8-25.1 5.1l-62-62zM145.8 80H448c8.8 0 16 7.2 16 16v302.2l-32.6-32.6c1.4-5.9.5-12.3-2.7-17.7l-80-136c-4.3-7.3-12.2-11.8-20.7-11.8s-16.4 4.5-20.7 11.8l-11 18.6zM64 133.8V416c0 35.3 28.7 64 64 64h282.2l-48-48H128c-8.8 0-16-7.2-16-16V181.8zM280 384h34.2L201.1 270.9l-52.7 75.3c-5.1 7.3-5.8 16.9-1.6 24.8s12.3 13 21.2 13z"})
);

export default LanImageSlashRegular;
