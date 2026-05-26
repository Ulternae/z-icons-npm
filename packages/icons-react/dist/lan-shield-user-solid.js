import React from 'react';

export const LanShieldUserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256.3 0c2 0 4 .2 5.9.6.2 0 .5.1.7.2l2.4.6c.2.1.5.2.7.2.7.2 1.4.5 2.1.8l.3.1 189.3 80.2 4 1.9c18.6 9.5 32.4 28 34.1 50.4l.2 4.9c-.5 99.2-41.3 280.7-213.7 363.2-14.6 7-31.3 7.8-46.4 2.6l-6.4-2.6C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.4-47.9 38.3-57.2L243.6 2.5c.1 0 .2-.1.3-.1.7-.3 1.4-.5 2.1-.8.2-.1.5-.2.7-.2.8-.3 1.7-.4 2.5-.6.2 0 .4-.1.7-.2 1.9-.4 3.9-.6 5.9-.6h.6zM224 272c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16 0-44.2-35.8-80-80-80zm32-152a56 56 0 1 0 0 112 56 56 0 1 0 0-112"})
);

export default LanShieldUserSolid;
