import React from 'react';

export const LanReflectVerticalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80.6 491.1c-1.2-3-.6-6.4 1.7-8.7l136-136c3.1-3.1 8.2-3.1 11.3 0l136 136c2.3 2.3 3 5.7 1.7 8.7s-4.2 4.9-7.4 4.9H88c-3.2 0-6.2-1.9-7.4-4.9m1.7-461.4c-2.3-2.3-3-5.7-1.7-8.7s4.2-5 7.4-5h272c3.2 0 6.2 1.9 7.4 4.9s.6 6.4-1.7 8.7l-136 136c-3.1 3.1-8.2 3.1-11.3 0l-136-136zM88 0c-9.7 0-18.5 5.8-22.2 14.8S64.2 34.1 71 41l136 136c9.4 9.4 24.6 9.4 33.9 0L377 41c6.9-6.9 8.9-17.2 5.2-26.2S369.7 0 360 0zM71 471c-6.9 6.9-8.9 17.2-5.2 26.2S78.3 512 88 512h272c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L241 335c-9.4-9.4-24.6-9.4-33.9 0zM8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanReflectVerticalThin;
