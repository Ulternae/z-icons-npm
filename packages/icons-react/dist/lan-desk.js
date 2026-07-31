import React from 'react';

export const LanDesk = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M528 64c26.5 0 48 21.5 48 48v32c0 20.9-13.4 38.6-32 45.2V432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H288v40c0 8.8-7.2 16-16 16s-16-7.2-16-16V192H64v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V189.2C13.4 182.6 0 164.9 0 144v-32c0-24.9 18.9-45.3 43.1-47.8L48 64zM288 192v160h224V192zm144 64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM48 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"})
);

export default LanDesk;
