import React from 'react';

export const LanBookOpen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 517.275',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m240 100-21.4-8.9A351.5 351.5 0 0 0 83.2 64H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h35.2c53.8 0 107 10.4 156.8 30.7zm32 378.7c49.8-20.3 103-30.7 156.8-30.7H464c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16h-35.2c-46.5 0-92.5 9.2-135.4 27.1L272 100zM230.9 61.5 256 72l25.1-10.5C327.9 42 378.1 32 428.8 32H464c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-35.2c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h35.2c50.7 0 100.9 10 147.7 29.5"})
);

export default LanBookOpen;
