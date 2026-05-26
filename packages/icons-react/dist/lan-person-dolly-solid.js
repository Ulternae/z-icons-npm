import React from 'react';

export const LanPersonDollySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112M0 171.1C0 138.5 26.5 112 59.1 112c23.5 0 45.5 11.3 59.1 30.4l48.7 68.2c6 8.4 15.7 13.4 26 13.4H256v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v280h184c13.3 0 24 10.7 24 24s-10.7 24-24 24H317.3c-6.6 18.6-24.4 32-45.3 32-26.5 0-48-21.5-48-48 0-20.9 13.4-38.7 32-45.3V288h-63.1c-31 0-60.1-15-78.1-40.2l-2.8-3.9V324l41.6 31.2c24.2 18.1 38.4 46.6 38.4 76.8v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80c0-10.1-4.7-19.6-12.8-25.6l-76.8-57.6C14.2 330.7 0 302.2 0 272zm0 208.2c3.1 2.7 6.3 5.4 9.6 7.9L64 428v84c0 17.7-14.3 32-32 32S0 529.7 0 512zM384 256h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"})
);

export default LanPersonDollySolid;
