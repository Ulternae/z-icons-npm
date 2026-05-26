import React from 'react';

export const LanComputerMouseScrollwheelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 352V160c0-79.5-64.5-144-144-144h-64C80.5 16 16 80.5 16 160v192c0 79.5 64.5 144 144 144h64c79.5 0 144-64.5 144-144M0 160C0 71.6 71.6 0 160 0h64c88.4 0 160 71.6 160 160v192c0 88.4-71.6 160-160 160h-64C71.6 512 0 440.4 0 352zm208-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16zm-48 0c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32z"})
);

export default LanComputerMouseScrollwheelThin;
