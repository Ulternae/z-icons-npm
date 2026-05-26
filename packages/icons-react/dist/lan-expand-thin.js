import React from 'react';

export const LanExpandThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 32c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v136c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8zM0 328c0-4.4 3.6-8 8-8s8 3.6 8 8v136h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8zM296 32h144c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V48H296c-4.4 0-8-3.6-8-8s3.6-8 8-8m152 296v144c0 4.4-3.6 8-8 8H296c-4.4 0-8-3.6-8-8s3.6-8 8-8h136V328c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanExpandThin;
