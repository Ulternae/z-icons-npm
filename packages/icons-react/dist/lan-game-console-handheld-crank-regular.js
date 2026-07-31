import React from 'react';

export const LanGameConsoleHandheldCrankRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v176h32V168c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24h-56v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m16 160c8.8 0 16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16m120 16a24 24 0 1 1 0 48 24 24 0 1 1 0-48m40 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanGameConsoleHandheldCrankRegular;
