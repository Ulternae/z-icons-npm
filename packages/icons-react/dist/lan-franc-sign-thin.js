import React from 'react';

export const LanFrancSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M72 32c-4.4 0-8 3.6-8 8v296H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v120c0 4.4 3.6 8 8 8s8-3.6 8-8V352h136c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V224h200c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V48h232c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanFrancSignThin;
