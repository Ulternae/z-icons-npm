import React from 'react';

export const LanUserGroupSimpleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 128a96 96 0 1 1 192 0 96 96 0 1 1-192 0M0 432c0-79.5 64.5-144 144-144s144 64.5 144 144v38c0 23.2-18.8 42-42 42H42c-23.2 0-42-18.8-42-42zM432 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 480c-37 0-70.7-13.9-96.1-36.8.1-1.7.1-3.5.1-5.2v-38c0-46.1-16.2-88.3-43.3-121.4 7-13.4 21.1-22.6 37.3-22.6h204c23.2 0 42 18.8 42 42v38c0 79.5-64.5 144-144 144"})
);

export default LanUserGroupSimpleSolid;
