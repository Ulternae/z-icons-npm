import React from 'react';

export const LanWaveTriangleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M162.1 64.1c10.5.7 19.9 6.5 25.3 15.5l168.4 280.5L455 236c11-13.8 31.2-16 45-5s16 31.2 5 45L377 436c-6.5 8.2-16.7 12.6-27.1 11.9s-19.9-6.5-25.3-15.5L156.2 151.9 57 276c-11 13.8-31.2 16-45 5s-16-31.2-5-45L135 76c6.5-8.2 16.7-12.6 27.1-11.9"})
);

export default LanWaveTriangleSolid;
