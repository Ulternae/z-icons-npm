import React from 'react';

export const LanTripleChevronsRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M26.8 98.3c3.1-3.1 8.2-3.1 11.3 0l152 152 1 1.2c2 3.1 1.7 7.3-1 10.1l-152 152-1.2 1c-3.1 2-7.3 1.7-10.1-1s-3.1-7-1-10.1l1-1.3 146.3-146.3L26.8 109.6c-3.1-3.1-3.1-8.2 0-11.3m192 0c3.1-3.1 8.2-3.1 11.3 0l152 152 1 1.2c2 3.1 1.7 7.3-1 10.1l-152 152-1.2 1c-3.1 2-7.3 1.7-10.1-1s-3.1-7-1-10.1l1-1.3 146.3-146.3-146.3-146.3c-3.1-3.1-3.1-8.2 0-11.3m192 0c3.1-3.1 8.2-3.1 11.3 0l152 152 1 1.2c2 3.1 1.7 7.3-1 10.1l-152 152-1.2 1c-3.1 2-7.3 1.7-10.1-1-2.7-2.7-3.1-7-1-10.1l1-1.3 146.3-146.3-146.3-146.3c-3.1-3.1-3.1-8.2 0-11.3"})
);

export default LanTripleChevronsRightThin;
