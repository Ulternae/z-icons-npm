import React from 'react';

export const LanTennisBallSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M51.9 216c41.7-1 83.1-17.3 114.9-49.2S215 93.6 216 51.9c13-2.5 26.3-3.9 40-3.9 2.7 0 5.3.1 8 .2 0 55.2-21.1 110.4-63.3 152.6S103.4 264 48.2 264c-.1-2.7-.2-5.3-.2-8 0-13.7 1.3-27.1 3.9-40m408.3 80c-41.7 1-83.1 17.3-114.9 49.2s-48.3 73.2-49.3 115c-13 2.5-26.3 3.8-40 3.8-2.7 0-5.3-.1-8-.2 0-55.2 21.1-110.4 63.3-152.6S408.6 248 463.8 248c.1 2.7.2 5.3.2 8 0 13.7-1.3 27.1-3.8 40"})
);

export default LanTennisBallSolid;
