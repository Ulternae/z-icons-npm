import React from 'react';

export const LanSnowmobileBlankSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M309.5 85.3c-5.9-11.9-20.3-16.7-32.2-10.7s-16.7 20.3-10.7 32.2l32 64v.1L256 224.1H96c-35.3 0-64 28.7-64 64v48c-19.4 14.6-32 37.8-32 64 0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80 0-18-6-34.6-16-48h53.6l4.6 10.1 32.3 69.9H375c-13.3 0-24 10.7-24 24s10.7 24 24 24h81.1c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8h-8.6l-36.9-80c56.2-.4 101.6-46 101.6-102.3 0-6-3.4-11.4-8.7-14.1l-158.2-79.1-3.6-7.3-32-64zM80 368h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-17.7 0-32-14.3-32-32s14.3-32 32-32"})
);

export default LanSnowmobileBlankSolid;
