import React from 'react';

export const LanRadar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M323.1 166.3c-18.7-14-41.9-22.3-67.1-22.3-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112h32c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144c34 0 65.2 11.8 89.9 31.5l56.8-56.8C363.4 52.6 312.1 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224h32c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0c64.9 0 124.2 24.2 169.4 64l43.3-43.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-224 224c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"})
);

export default LanRadar;
