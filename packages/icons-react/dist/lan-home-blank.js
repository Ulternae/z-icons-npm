import React from 'react';

export const LanHomeBlank = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M267.4 4.3c-6.1-5.7-15.7-5.7-21.8 0l-240 224c-6.5 6-6.8 16.2-.8 22.6s16.2 6.8 22.6.8L48.5 232v216c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V232l21.1 19.7c6.5 6 16.6 5.7 22.6-.8s5.7-16.6-.8-22.6zm165.1 197.9V448c0 17.7-14.3 32-32 32h-288c-17.7 0-32-14.3-32-32V202.2l176-164.3z"})
);

export default LanHomeBlank;
