import React from 'react';

export const LanComputerMouseScrollwheel = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 352V160c0-70.7-57.3-128-128-128h-64C89.3 32 32 89.3 32 160v192c0 70.7 57.3 128 128 128h64c70.7 0 128-57.3 128-128M0 160C0 71.6 71.6 0 160 0h64c88.4 0 160 71.6 160 160v192c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352zm208-48v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanComputerMouseScrollwheel;
