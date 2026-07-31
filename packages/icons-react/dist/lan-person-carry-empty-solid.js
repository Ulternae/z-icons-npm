import React from 'react';

export const LanPersonCarryEmptySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112M64 171.1c0-32.6 26.5-59.1 59.1-59.1 23.5 0 45.5 11.3 59.1 30.4l48.7 68.2c6 8.4 15.7 13.4 26 13.4H288c17.7 0 32 14.3 32 32s-14.3 32-32 32h-31.1c-31 0-60.1-15-78.1-40.2l-2.8-3.9V324l41.6 31.2c24.2 18.1 38.4 46.6 38.4 76.8v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80c0-10.1-4.7-19.6-12.8-25.6l-76.8-57.6C78.2 330.7 64 302.2 64 272zm0 208.2c3.1 2.7 6.3 5.4 9.6 7.9L128 428v84c0 17.7-14.3 32-32 32s-32-14.3-32-32z"})
);

export default LanPersonCarryEmptySolid;
