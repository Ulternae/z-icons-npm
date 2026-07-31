import React from 'react';

export const LanPopsicleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M304 160c0-79.5-64.5-144-144-144S16 80.5 16 160v176c0 17.7 14.3 32 32 32h104V168c0-4.4 3.6-8 8-8s8 3.6 8 8v200h104c17.7 0 32-14.3 32-32zM152 384H48c-26.5 0-48-21.5-48-48V160C0 71.6 71.6 0 160 0s160 71.6 160 160v176c0 26.5-21.5 48-48 48H168v120c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
);

export default LanPopsicleThin;
