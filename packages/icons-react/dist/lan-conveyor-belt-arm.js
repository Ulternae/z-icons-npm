import React from 'react';

export const LanConveyorBeltArm = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v112c0 4.2 1.7 8.3 4.7 11.3s7.1 4.7 11.3 4.7h240v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c0-4.2-1.7-8.3-4.7-11.3s-7.1-4.7-11.3-4.7H240V32h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm336 288h64v32h-64zm-32-8v40h-32v-40c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24v40h-32v-40c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24v40c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96v-40c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24m-296 72h424c35.3 0 64 28.7 64 64s-28.7 64-64 64H96c-35.3 0-64-28.7-64-64s28.7-64 64-64zm72-64v32h-64v-32zm96 32v-32h64v32zM128 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanConveyorBeltArm;
