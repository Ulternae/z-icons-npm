import React from 'react';

export const LanBoothCurtain = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 56c0-13.3 10.7-24 24-24h72v352c0 35.3 28.7 64 64 64 19.1 0 36.3-8.4 48-21.7 11.7 13.3 28.9 21.7 48 21.7s36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7 11.7 0 22.6-3.1 32-8.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v440c0 8.8 7.2 16 16 16s16-7.2 16-16zm384 8v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V32h40c13.3 0 24 10.7 24 24zm-96 0v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V32h64zM160 384V32h64v352c0 17.7-14.3 32-32 32s-32-14.3-32-32"})
);

export default LanBoothCurtain;
