import React from 'react';

export const LanTrashCanPlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M173.7 0c-9.8 0-18.6 6-22.3 15.1L131.8 64h184.4l-19.6-48.9C293 6 284.1 0 274.3 0zm-37.2 9.1C142.6-6 157.3-16 173.7-16h100.7c16.4 0 31.1 10 37.1 25.1L333.4 64H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h106.6zM32 448V128h16v320c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V128h16v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64m200-240c0-4.4-3.6-8-8-8s-8 3.6-8 8v72h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72z"})
);

export default LanTrashCanPlusThin;
