import React from 'react';

export const LanBookmarkCircleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-144-70-56c-5.8-4.7-14.1-4.7-20 0l-70 56V176c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32zm-10 12.5c4.8 3.8 11.4 4.6 16.9 1.9s9.1-8.3 9.1-14.4V176c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v192c0 6.2 3.5 11.8 9.1 14.4s12.1 1.9 16.9-1.9l70-56z"})
);

export default LanBookmarkCircleThin;
