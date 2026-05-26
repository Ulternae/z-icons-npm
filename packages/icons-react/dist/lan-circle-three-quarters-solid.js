import React from 'react';

export const LanCircleThreeQuartersSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256c0 141.4 114.6 256 256 256 130.6 0 238.3-97.8 254-224.1 2.2-17.5-12.3-31.9-30-31.9H288c-17.7 0-32-14.3-32-32z"})
);

export default LanCircleThreeQuartersSolid;
