import React from 'react';

export const LanCross = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 40c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v88h88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-88v216c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V256H40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h88zm40-8c-4.4 0-8 3.6-8 8v104c0 8.8-7.2 16-16 16H40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h104c8.8 0 16 7.2 16 16v232c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V240c0-8.8 7.2-16 16-16h104c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H240c-8.8 0-16-7.2-16-16V40c0-4.4-3.6-8-8-8z"})
);

export default LanCross;
