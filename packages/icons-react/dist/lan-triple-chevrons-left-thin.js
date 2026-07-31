import React from 'react';

export const LanTripleChevronsLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M156.1 97.3c3.1-2.1 7.3-1.7 10.1 1s3.1 7 1 10.1l-1 1.2L19.9 255.9l146.3 146.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-152-152-1-1.2c-2-3.1-1.7-7.3 1-10.1l152-152 1.2-1zm192 0c3.1-2.1 7.3-1.7 10.1 1s3.1 7 1 10.1l-1 1.2-146.3 146.3 146.3 146.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-152-152-1-1.2c-2-3.1-1.7-7.3 1-10.1l152-152 1.3-1zm192 0c3.1-2.1 7.3-1.7 10.1 1s3.1 7 1 10.1l-1 1.2-146.3 146.3 146.3 146.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-152-152-1-1.2c-2.1-3.1-1.7-7.3 1-10.1l152-152 1.3-1z"})
);

export default LanTripleChevronsLeftThin;
