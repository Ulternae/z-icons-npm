import React from 'react';

export const LanArrowUpRightFromSquareRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 24c0 13.3 10.7 24 24 24h118.1l-231 231c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l231-231V200c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H312c-13.3 0-24 10.7-24 24M80 96c-44.2 0-80 35.8-80 80v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-88c0-13.3-10.7-24-24-24s-24 10.7-24 24v88c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32h88c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanArrowUpRightFromSquareRegular;
