import React from 'react';

export const LanCircleQuarterSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32.2 256c-17.6 0-32.2-14.4-30-31.9C16.6 108.2 108.5 16.4 224.3 2c17.5-2.2 31.9 12.3 31.9 30v192c0 17.7-14.3 32-32 32z"})
);

export default LanCircleQuarterSolid;
