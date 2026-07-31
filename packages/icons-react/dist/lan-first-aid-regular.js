import React from 'react';

export const LanFirstAidRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 400h224V112H144zm-48 0V112H64c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zM64 64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64m352 336h32c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16h-32zM228 192c0-8.8 7.2-16 16-16h24c8.8 0 16 7.2 16 16v36h36c8.8 0 16 7.2 16 16v24c0 8.8-7.2 16-16 16h-36v36c0 8.8-7.2 16-16 16h-24c-8.8 0-16-7.2-16-16v-36h-36c-8.8 0-16-7.2-16-16v-24c0-8.8 7.2-16 16-16h36z"})
);

export default LanFirstAidRegular;
