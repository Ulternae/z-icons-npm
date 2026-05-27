import React from 'react';

export const CoreBellSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320.3 512h-128v-64h128zm-64-512c88.4 0 160 71.6 160 160v88.4L500.1 416H12.5l83.8-167.6V160c0-88.4 71.6-160 160-160"})
);

export default CoreBellSolid;
