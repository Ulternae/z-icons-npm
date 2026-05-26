import React from 'react';

export const LanBatteryCarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M110.6 48H200c4.4 0 8-3.6 8-8s-3.6-8-8-8H88c-4.4 0-8 3.6-8 8s3.6 8 8 8zM448 112c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48zM64 96c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm304 88c-4.4 0-8 3.6-8 8v40h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h40c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40v-40c0-4.4-3.6-8-8-8M96 232c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8zM401.4 48H424c4.4 0 8-3.6 8-8s-3.6-8-8-8H312c-4.4 0-8 3.6-8 8s3.6 8 8 8z"})
);

export default LanBatteryCarThin;
