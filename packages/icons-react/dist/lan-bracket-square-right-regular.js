import React from 'react';

export const LanBracketSquareRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 88c0-30.9-25.1-56-56-56H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c4.4 0 8 3.6 8 8v336c0 4.4-3.6 8-8 8H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c30.9 0 56-25.1 56-56z"})
);

export default LanBracketSquareRightRegular;
