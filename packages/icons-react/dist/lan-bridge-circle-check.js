import React from 'react';

export const LanBridgeCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h32v64H16c-8.8 0-16 7.2-16 16v112c0 7.3 5 13.7 12.1 15.5l3.4.9C44 279.5 64 305.1 64 334.5V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-35.3 28.7-64 64-64 6.3 0 12.4.9 18.2 2.6 6.5-9.3 13.7-18 21.7-26-12.1-5.5-25.6-8.6-39.8-8.6-53 0-96 43-96 96v96h-64V334.5c0-41-26-77.1-64-90.5v-83.9h448v54c11.1 2.9 21.8 6.7 32 11.4v-81.4c0-8.8-7.2-16-16-16h-32v-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm416 32v64h-96V64zm-128 0v64h-96V64zm-128 0v64H80V64zm256 224a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m57.4-204.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.4z"})
);

export default LanBridgeCircleCheck;
