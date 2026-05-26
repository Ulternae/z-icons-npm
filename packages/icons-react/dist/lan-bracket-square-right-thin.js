import React from 'react';

export const LanBracketSquareRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 72c0-22.1-17.9-40-40-40H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c13.3 0 24 10.7 24 24v368c0 13.3-10.7 24-24 24H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c22.1 0 40-17.9 40-40z"})
);

export default LanBracketSquareRightThin;
