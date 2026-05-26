import React from 'react';

export const LanPi = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h112v241.5c0 53.3-15.8 105.3-45.3 149.7-4.9 7.4-2.9 17.3 4.4 22.2s17.3 2.9 22.2-4.4c33.1-49.7 50.7-108 50.7-167.5V64h160v350.6c0 36.1 29.3 65.4 65.4 65.4 24.8 0 47.4-14 58.5-36.2l2.3-4.7c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-2.3 4.7c-5.7 11.3-17.2 18.5-29.9 18.5-18.5 0-33.4-15-33.4-33.4V64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanPi;
