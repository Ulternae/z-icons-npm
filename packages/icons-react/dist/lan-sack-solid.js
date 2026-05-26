import React from 'react';

export const LanSackSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184 112h144l37.3-74.5c1.8-3.6 2.7-7.6 2.7-11.6C368 11.6 356.4 0 342.1 0H169.9C155.6 0 144 11.6 144 25.9c0 4 .9 8 2.7 11.6zm158.4 48H169.6l-48.7 40.6A291.35 291.35 0 0 0 16 424.5c0 48.3 39.2 87.5 87.5 87.5h305.1c48.3 0 87.5-39.2 87.5-87.5 0-86.5-38.4-168.6-104.9-224z"})
);

export default LanSackSolid;
