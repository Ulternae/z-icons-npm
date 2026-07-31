import React from 'react';

export const LanPersonSimpleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 0a64 64 0 1 1 0 128A64 64 0 1 1 96 0M48 224v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16m-48 0c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v64c0 23.7-12.9 44.4-32 55.4V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V352H80v136c0 13.3-10.7 24-24 24s-24-10.7-24-24V343.4c-19.1-11-32-31.7-32-55.4z"})
);

export default LanPersonSimpleRegular;
