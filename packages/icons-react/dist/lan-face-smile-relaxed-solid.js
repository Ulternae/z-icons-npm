import React from 'react';

export const LanFaceSmileRelaxedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-90.6-190.1c20.4 28 53.4 46.1 90.6 46.1s70.2-18.1 90.6-46.1c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5C356.3 390 309.2 416 256 416s-100.3-26-129.4-65.9c-7.8-10.7-5.4-25.7 5.3-33.5s25.7-5.4 33.5 5.3M168 196c-11 0-20 9-20 20s-9 20-20 20-20-9-20-20c0-33.1 26.9-60 60-60h16c33.1 0 60 26.9 60 60 0 11-9 20-20 20s-20-9-20-20-9-20-20-20zm140 20c0 11-9 20-20 20s-20-9-20-20c0-33.1 26.9-60 60-60h16c33.1 0 60 26.9 60 60 0 11-9 20-20 20s-20-9-20-20-9-20-20-20h-16c-11 0-20 9-20 20"})
);

export default LanFaceSmileRelaxedSolid;
