import React from 'react';

export const LanSwatchbook = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 416c0 53 43 96 96 96h352c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64h-48.4l-32 32H448c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H171.7l241.6-241.6c25-25 25-65.5 0-90.5L368 102.6c-25-25-65.5-25-90.5 0l-37.6 37.6v45.3l60.2-60.2c12.5-12.5 32.8-12.5 45.3 0l45.3 45.3c12.5 12.5 12.5 32.8 0 45.3L192 414.5V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm96 64c-35.3 0-64-28.7-64-64V288h128v128c0 35.3-28.7 64-64 64M32 256v-96h128v96zm0-128V64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64zm64 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanSwatchbook;
