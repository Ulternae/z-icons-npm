import React from 'react';

export const LanPeoplePantsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M104 24a56 56 0 1 1 112 0 56 56 0 1 1-112 0M80 237l-35 62.7c-6.5 11.6-21.1 15.7-32.7 9.2s-15.7-21.1-9.2-32.7l60.5-108.3c19.3-34.5 55.7-55.9 95.2-55.9 41.1 0 78.7 23.1 97.3 59.8l33 65.1 38.6-69.1c19.3-34.5 55.7-55.9 95.2-55.9 41.1 0 78.7 23.1 97.3 59.8l53.3 105.4c6 11.8 1.3 26.3-10.6 32.3s-26.3 1.3-32.2-10.6L504 246.3V520c0 13.3-10.7 24-24 24s-24-10.7-24-24V368h-64v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V237l-35 62.7c-4.3 7.7-12.6 12.5-21.4 12.3s-16.9-5.2-20.9-13.2L240 246.3V520c0 13.3-10.7 24-24 24s-24-10.7-24-24V368h-64v152c0 13.3-10.7 24-24 24s-24-10.7-24-24zm112-67.2c-9.7-6.3-21.2-9.8-33.2-9.8-11 0-21.6 3-30.8 8.4V320h64zm200-1.5v151.6h64V169.7c-9.7-6.3-21.2-9.8-33.2-9.8-11 0-21.6 3-30.8 8.4M368 24a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanPeoplePantsRegular;
