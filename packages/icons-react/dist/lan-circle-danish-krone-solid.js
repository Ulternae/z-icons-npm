import React from 'react';

export const LanCircleDanishKroneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-104c0-13.3-10.7-24-24-24s-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-38.1l15.8-15.8 35.1 65.2c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-42-77.9L265 233c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V152zm136 40c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-81.4c0-8.1 3.2-15.9 9-21.7s13.5-9 21.7-9h9.4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-9.4c-11.3 0-22.3 2.4-32.4 7-3.6-8.8-12.2-15-22.2-15zm64 192a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanCircleDanishKroneSolid;
