import React from 'react';

export const LanRectangleHighDynamicRange = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 48v64h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64H96v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16m128 0c0-8.8 7.2-16 16-16h48c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-48c-8.8 0-16-7.2-16-16zm32 144h32c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-32zm128-144c0-8.8 7.2-16 16-16h48c35.3 0 64 28.7 64 64 0 20.3-9.5 38.4-24.2 50.1 14.9 13.2 24.2 32.4 24.2 53.9v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-22.1-17.9-40-40-40h-24v48c0 8.8-7.2 16-16 16s-16-7.2-16-16zm64 80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v64z"})
);

export default LanRectangleHighDynamicRange;
