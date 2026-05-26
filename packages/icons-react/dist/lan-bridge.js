import React from 'react';

export const LanBridge = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h32v64H16c-8.8 0-16 7.2-16 16v112c0 7.3 5 13.7 12.1 15.5l3.4.9C44 279.5 64 305.1 64 334.5V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V334.5c0-29.4 20-55 48.5-62.1l3.4-.9c7.1-1.8 12.1-8.2 12.1-15.5V144c0-8.8-7.2-16-16-16h-32V64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm416 32v64h-96V64zm-128 0v64h-96V64zm-128 0v64H80V64zM32 243.9V160h448v83.9c-38 13.4-64 49.5-64 90.5v113.5h-64v-96c0-53-43-96-96-96s-96 43-96 96v96H96V334.4c0-41-26-77.1-64-90.5"})
);

export default LanBridge;
