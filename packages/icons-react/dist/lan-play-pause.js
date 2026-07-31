import React from 'react';

export const LanPlayPause = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16zM224 256 32 416V96zM52.5 71.4C43 63.5 29.7 61.7 18.4 67S0 83.6 0 96v320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6z"})
);

export default LanPlayPause;
