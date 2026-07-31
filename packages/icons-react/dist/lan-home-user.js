import React from 'react';

export const LanHomeUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M245.6 4.3c6.1-5.7 15.7-5.7 21.8 0l240 224c6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8L464.5 232v216c0 35.3-28.7 64-64 64h-288c-35.3 0-64-28.7-64-64V232l-21.1 19.7c-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6zm10.9 33.6-176 164.3V448c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V202.2zm0 218.1a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-32 192c-26.5 0-48 21.5-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48z"})
);

export default LanHomeUser;
