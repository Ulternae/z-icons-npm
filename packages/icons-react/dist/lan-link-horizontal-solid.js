import React from 'react';

export const LanLinkHorizontalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 288c53 0 96-43 96-96s-43-96-96-96H160c-53 0-96 43-96 96 0 25.2 9.7 48.2 25.6 65.3-6.2 19.8-9.6 40.9-9.6 62.7q0 5.4.3 10.8C32.3 303.2 0 251.4 0 192 0 103.6 71.6 32 160 32h128c88.4 0 160 71.6 160 160s-71.6 160-160 160h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32zm16-128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16c-53 0-96 43-96 96s43 96 96 96h128c53 0 96-43 96-96 0-25.2-9.7-48.2-25.6-65.3 6.2-19.8 9.6-40.9 9.6-62.7q0-5.4-.3-10.8c48 27.6 80.3 79.4 80.3 138.8 0 88.4-71.6 160-160 160H288c-88.4 0-160-71.6-160-160s71.6-160 160-160z"})
);

export default LanLinkHorizontalSolid;
