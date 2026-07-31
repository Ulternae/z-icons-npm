import React from 'react';

export const LanReflectVerticalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M71 41c-6.9-6.9-8.9-17.2-5.2-26.2S78.3 0 88 0h272c9.7 0 18.5 5.8 22.2 14.8s1.6 19.3-5.2 26.2L241 177c-9.4 9.4-24.6 9.4-33.9 0zM0 256c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m65.8 241.2c-3.7-9-1.7-19.3 5.2-26.2l136-136c9.4-9.4 24.6-9.4 33.9 0L377 471c6.9 6.9 8.9 17.2 5.2 26.2S369.7 512 360 512H88c-9.7 0-18.5-5.8-22.2-14.8"})
);

export default LanReflectVerticalSolid;
