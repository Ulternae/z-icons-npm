import React from 'react';

export const LanDitto = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 98.3V96c0-17.7-14.3-32-32-32S32 78.3 32 96v2.3c0 2 .2 3.9.5 5.9L58 251c.5 2.9 3 5 6 5s5.5-2.1 6-5l25.5-146.8c.3-1.9.5-3.9.5-5.9m-96 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8C98.3 274.7 82.5 288 64 288s-34.3-13.3-37.5-31.5L1 109.6c-.7-3.8-1-7.5-1-11.4zm288 0V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v2.3c0 2 .2 3.9.5 5.9L250 251c.5 2.9 3 5 6 5s5.5-2.1 6-5l25.5-146.8c.3-1.9.5-3.9.5-5.9m-96 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4l-25.5 146.8c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L193 109.6c-.7-3.8-1-7.5-1-11.4z"})
);

export default LanDitto;
