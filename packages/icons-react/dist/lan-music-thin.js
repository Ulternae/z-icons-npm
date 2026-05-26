import React from 'react';

export const LanMusicThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m434.8 16.5-224 49.8c-11 2.4-18.8 12.2-18.8 23.4v84.4l272-60.4V40c0-15.4-14.2-26.8-29.2-23.4zM464 291.8V130l-272 60.4V400c0 44.2-43 80-96 80S0 444.2 0 400s43-80 96-80c33.4 0 62.8 14.2 80 35.8V89.7c0-18.7 13-35 31.3-39L431.3.8c25-5.6 48.7 13.5 48.7 39V336c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c33.4 0 62.8 14.2 80 35.8m0 44.2c0-35.3-35.8-64-80-64s-80 28.7-80 64 35.8 64 80 64 80-28.7 80-64m-288 64c0-35.3-35.8-64-80-64s-80 28.7-80 64 35.8 64 80 64 80-28.7 80-64"})
);

export default LanMusicThin;
