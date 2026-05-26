import React from 'react';

export const LanHelicopterSymbol = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M477.8 224h32.3C495.6 108.2 403.8 16.4 288 2v32.3c98.1 14 175.7 91.6 189.7 189.7zm32.2 64h-32.3c-14 98.1-91.6 175.7-189.7 189.7V510c115.8-14.4 207.6-106.2 222-222M2 288c14.4 115.8 106.2 207.6 222 222v-32.3c-98.1-14-175.7-91.6-189.7-189.7zm0-64h32.3c14-98.1 91.6-175.7 189.7-189.7V2C108.2 16.4 16.4 108.2 2 224m174-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h160v96c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v96H176z"})
);

export default LanHelicopterSymbol;
