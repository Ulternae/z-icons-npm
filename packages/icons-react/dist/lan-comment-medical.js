import React from 'react';

export const LanCommentMedical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 400.2c6.2-11.4 4.9-25.4-3.2-35.4C48.6 329.9 32 286.7 32 240c0-113 98.3-208 224-208s224 95 224 208-98.3 208-224 208c-32.3 0-62.8-6.3-90.4-17.6-7.9-3.3-16.9-3.2-24.8.2l-101 43.2zM0 240c0 54.4 19.3 104.6 51.9 144.9L3.1 474.3c-2 3.7-3.1 7.9-3.1 12.2C0 500.6 11.4 512 25.5 512c4 0 7.8-.6 11.5-2.1L153.4 460c31.4 12.9 66.1 20 102.6 20 141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240m240-96c-17.7 0-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16v16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-16h16c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-16v-16c0-17.7-14.3-32-32-32zm32 136v24h-32v-40c0-4.4-3.6-8-8-8h-40v-32h40c4.4 0 8-3.6 8-8v-40h32v40c0 4.4 3.6 8 8 8h40v32h-40c-4.4 0-8 3.6-8 8z"})
);

export default LanCommentMedical;
