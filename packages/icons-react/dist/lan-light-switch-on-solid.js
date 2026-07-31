import React from 'react';

export const LanLightSwitchOnSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 96v192c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64m80-16h32c17.7 0 32 14.3 32 32v80h-96v-80c0-17.7 14.3-32 32-32"})
);

export default LanLightSwitchOnSolid;
