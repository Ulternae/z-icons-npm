import React from 'react';

export const LanEngineWarning = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M424 48c0 8.8-7.2 16-16 16h-72v64h112c35.3 0 64 28.7 64 64v16.7c-10.5-.9-21.5-.9-32 0V192c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32c5 0 9.8 2.4 12.8 6.4l33.6 44.8c6 8.1 15.5 12.8 25.6 12.8h8.7c.9 11 2.7 21.6 5.4 32h-14c-20.1 0-39.1-9.5-51.2-25.6L216 384h-24c-35.3 0-64-28.7-64-64v-48H96v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V160c0-8.8 7.2-16 16-16s16 7.2 16 16v80h32v-48c0-35.3 28.7-64 64-64h112V64h-72c-8.8 0-16-7.2-16-16s7.2-16 16-16h176c8.8 0 16 7.2 16 16m120 166v-38c0-8.8 7.2-16 16-16s16 7.2 16 16v49.4c-10.2-4.7-20.9-8.5-32-11.4m-144 10c4.1 0 7.8 1.5 10.6 4-15.1 7.5-29.1 17-41.6 28H240c-8.8 0-16-7.2-16-16s7.2-16 16-16zm208 176a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 44a20 20 0 1 1 0 40 20 20 0 1 1 0-40m0-124c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"})
);

export default LanEngineWarning;
