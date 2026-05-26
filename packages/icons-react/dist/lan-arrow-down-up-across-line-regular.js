import React from 'react';

export const LanArrowDownUpAcrossLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M471 145c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L401 7c-9.4-9.4-24.6-9.4-33.9 0L263 111c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63V232h-336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v150.1l-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.3 24.5 0 33.9l104 104c9.4 9.4 24.6 9.4 33.9 0L249 401c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63V280h336c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V81.9l63 63zm-63 183h-48v160c0 13.3 10.7 24 24 24s24-10.7 24-24zM104 184h48V24c0-13.3-10.7-24-24-24s-24 10.7-24 24z"})
);

export default LanArrowDownUpAcrossLineRegular;
