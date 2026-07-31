import React from 'react';

export const LanLayerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M498.1 314.2c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101C5.4 353.8 0 345.3 0 336s5.4-17.9 13.9-21.8l68.7-31.8 129.7 59.9c27.7 12.8 59.6 12.8 87.3 0l129.7-59.9zm-265.6-261c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101C5.4 193.8 0 185.3 0 176s5.4-17.9 13.9-21.8z"})
);

export default LanLayerSolid;
