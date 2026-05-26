import React from 'react';

export const LanPhoneIntercom = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm100.6 399c-8.8 10.4-21.9 17-36.6 17H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h64c14.7 0 27.8 6.6 36.6 17C160 38.5 175.2 32 192 32h256c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H192c-16.7 0-32-6.4-43.4-17m11.4-47c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm240-272H240v80h160zm-160-32h160c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32v-80c0-17.7 14.3-32 32-32m0 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanPhoneIntercom;
