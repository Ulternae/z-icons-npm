import React from 'react';

export const LanSignOutAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M505 273c9.4-9.4 9.4-24.6 0-33.9l-144-144c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112v80H208c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h112v80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2zM352 131.3 476.7 256 352 380.7V304c0-8.8-7.2-16-16-16H208c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h128c8.8 0 16-7.2 16-16zM176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H96C43 32 0 75 0 128v256c0 53 43 96 96 96h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64z"})
);

export default LanSignOutAlt;
