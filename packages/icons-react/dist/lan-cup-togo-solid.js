import React from 'react';

export const LanCupTogoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M55.2 17.7C60.6 6.8 71.7 0 83.8 0h280.4c12.1 0 23.2 6.8 28.6 17.7L416 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm19.3 436.4L48 176h352l-26.5 278.1c-3.1 32.8-30.7 57.9-63.7 57.9H138.2c-33 0-60.6-25.1-63.7-57.9m249.3-163.2c1.7-18.7-13.1-34.9-31.9-34.9H156c-18.8 0-33.6 16.2-31.9 34.9l8.7 96c1.5 16.5 15.3 29.1 31.9 29.1h118.5c16.6 0 30.4-12.6 31.9-29.1z"})
);

export default LanCupTogoSolid;
