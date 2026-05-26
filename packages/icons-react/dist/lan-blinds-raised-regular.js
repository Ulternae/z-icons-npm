import React from 'react';

export const LanBlindsRaisedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h88v376c0 13.3 10.7 24 24 24s24-10.7 24-24V80h264c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 160h40v-48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24m400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24H208v48z"})
);

export default LanBlindsRaisedRegular;
