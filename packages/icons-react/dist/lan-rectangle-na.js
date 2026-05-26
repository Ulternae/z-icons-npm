import React from 'react';

export const LanRectangleNA = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.3 32.3-30.6 57.5-63.7 57.5H64C30.9 448 3.6 422.8.3 390.5L0 384V128c0-35.3 28.7-64 64-64zM64 96c-16.6 0-30.2 12.6-31.8 28.7L32 128v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm219.6 40.4c8.6 2 14 10.6 12 19.2l-48 208c-2 8.6-10.6 14-19.2 12s-14-10.6-12-19.2l48-208c2-8.6 10.6-14 19.2-12M176 160c8.8 0 16 7.2 16 16v160c0 7.2-4.8 13.5-11.7 15.4s-14.3-1-18-7.2L96 233.8V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-7.2 4.8-13.5 11.7-15.4s14.3 1 18 7.2L160 278.2V176c0-8.8 7.2-16 16-16m208 0c35.3 0 64 28.7 64 64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V224c0-35.3 28.7-64 64-64m0 32c-17.7 0-32 14.3-32 32v32h64v-32c0-17.7-14.3-32-32-32"})
);

export default LanRectangleNA;
