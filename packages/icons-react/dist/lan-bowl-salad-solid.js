import React from 'react';

export const LanBowlSaladSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272.9 240c-.6-5.3-.9-10.6-.9-16 0-79.5 64.5-144 144-144 2.6 0 5.2.1 7.7.2C406.1 60.4 380.5 48 352 48c-11.4 0-22.3 2-32.4 5.6C299.9 21.4 264.5 0 224 0s-75.9 21.5-95.6 53.6C118.3 50 107.4 48 96 48 43 48 0 91 0 144s43 96 96 96h51.7l-65.9-65.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l93.9 93.9V112c0-11 9-20 20-20s20 9 20 20v128zM27.4 288C12.3 288 0 300.3 0 315.4c0 70.5 44.4 130.7 106.7 154.1l1.8 14.4c2 16 15.6 28 31.8 28h231.5c16.1 0 29.8-12 31.8-28l1.8-14.4c62.3-23.4 106.7-83.6 106.7-154.1 0-15.1-12.3-27.4-27.4-27.4zM512 224c0-53-43-96-96-96s-96 43-96 96c0 5.5.5 10.8 1.3 16h189.3c.9-5.2 1.3-10.5 1.3-16z"})
);

export default LanBowlSaladSolid;
