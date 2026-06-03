import React from 'react';

export const LanFilmSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-62.1-62.1c3.3-7.7 5.1-16.2 5.1-25.1V96c0-35.3-28.7-64-64-64H128c-8.9 0-17.4 1.8-25.1 5.1l-62-62zM145.8 80H176v30.2zm78.2 78.2V80h128v206.2zm176 176V280h64v118.2zM362.2 432H224V293.8L162.2 232H112v-50.2l-48-48V416c0 35.3 28.7 64 64 64h282.2zM176 280v56h-64v-56zm0 104v48h-48c-8.8 0-16-7.2-16-16v-32zM400 80h48c8.8 0 16 7.2 16 16v32h-64zm64 96v56h-64v-56z"})
);

export default LanFilmSlashRegular;
