import React from 'react';

export const LanExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 128 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 432c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40M64 0c26.5 0 48 21.5 48 48v1.7l-16 304c-.9 17-15 30.3-32 30.3s-31-13.3-32-30.3l-16-304V48C16 21.5 37.5 0 64 0"})
);

export default LanExclamationSolid;
