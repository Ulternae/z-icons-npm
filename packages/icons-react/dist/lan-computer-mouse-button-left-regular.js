import React from 'react';

export const LanComputerMouseButtonLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 224v128c0 61.9 50.1 112 112 112h64c61.9 0 112-50.1 112-112V160c0-61.9-50.1-112-112-112h-32v120c0 30.9-25.1 56-56 56zM0 160C0 71.6 71.6 0 160 0h64c88.4 0 160 71.6 160 160v192c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352z"})
);

export default LanComputerMouseButtonLeftRegular;
