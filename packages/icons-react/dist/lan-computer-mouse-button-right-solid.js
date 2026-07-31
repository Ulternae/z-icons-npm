import React from 'react';

export const LanComputerMouseButtonRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M168 168V0h-8C71.6 0 0 71.6 0 160v192c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V240H240c-39.8 0-72-32.2-72-72m216 24v-32C384 71.6 312.4 0 224 0h-8v168c0 13.3 10.7 24 24 24z"})
);

export default LanComputerMouseButtonRightSolid;
