import React from 'react';

export const LanShuttlecockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m262.4 424.3-33.2 29.2C181.3 495.4 109 493 64 448s-47.4-117.2-5.5-165.2l29.1-33.3zM239.8 0c10 0 19 5.6 23.5 14.5l18.3 36.6c4.1 8.2 4.5 17.7 1.1 26.2L224 224l99.8-128.4c7.4-9.6 19.7-14.1 31.5-11.8l39.7 7.9c12.7 2.5 22.6 12.4 25.1 25.1l7.9 39.7c2.4 11.9-2.2 24.1-11.8 31.6L288 288l146.7-58.7c8.5-3.4 18-3 26.2 1.1l36.6 18.3c8.9 4.5 14.5 13.5 14.5 23.5 0 9.7-5.4 18.6-13.9 23.2L304.6 398.6 113.4 207.4 216.6 13.9C221.1 5.3 230.1 0 239.8 0"})
);

export default LanShuttlecockSolid;
