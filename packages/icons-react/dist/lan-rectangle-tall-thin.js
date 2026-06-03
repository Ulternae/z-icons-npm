import React from 'react';

export const LanRectangleTallThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 384 640',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320-48c26.5 0 48 21.5 48 48v512c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V0c0-26.5 21.5-48 48-48zM64-64C28.7-64 0-35.3 0 0v512c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V0c0-35.3-28.7-64-64-64z"})
);

export default LanRectangleTallThin;
