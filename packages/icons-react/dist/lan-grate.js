import React from 'react';

export const LanGrate = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 32h272c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM32 272v144c0 17.7 14.3 32 32 32h32V272zm96 176h80V272h-80zm112 0h80V272h-80zm112 0h32c17.7 0 32-14.3 32-32V272h-64zm64-208V96c0-17.7-14.3-32-32-32h-32v176zM320 64h-80v176h80zm-112 0h-80v176h80zM96 64H64c-17.7 0-32 14.3-32 32v144h64z"})
);

export default LanGrate;
