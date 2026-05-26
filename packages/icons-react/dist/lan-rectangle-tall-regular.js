import React from 'react';

export const LanRectangleTallRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320-16c8.8 0 16 7.2 16 16v512c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V0c0-8.8 7.2-16 16-16zM64-64C28.7-64 0-35.3 0 0v512c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V0c0-35.3-28.7-64-64-64z"})
);

export default LanRectangleTallRegular;
