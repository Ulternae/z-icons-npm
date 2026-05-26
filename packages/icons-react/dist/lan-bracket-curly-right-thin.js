import React from 'react';

export const LanBracketCurlyRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 88c0-30.9-25.1-56-56-56H56c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c22.1 0 40 17.9 40 40v77.5c0 19.1 7.6 37.4 21.1 50.9l39.6 39.6-39.6 39.6a71.98 71.98 0 0 0-21.1 50.9V424c0 22.1-17.9 40-40 40H56c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c30.9 0 56-25.1 56-56v-77.5c0-14.9 5.9-29.1 16.4-39.6l45.3-45.3c3.1-3.1 3.1-8.2 0-11.3L208.4 205a55.92 55.92 0 0 1-16.4-39.6z"})
);

export default LanBracketCurlyRightThin;
