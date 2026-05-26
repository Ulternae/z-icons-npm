import React from 'react';

export const LanXRayThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v416H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V48h24c4.4 0 8-3.6 8-8s-3.6-8-8-8zm40 432V48h416v416zm216-344c0-4.4-3.6-8-8-8s-8 3.6-8 8v40h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v72H144c-4.4 0-8 3.6-8 8s3.6 8 8 8h104v72h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88v-72h104c4.4 0 8-3.6 8-8s-3.6-8-8-8H264v-72h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88z"})
);

export default LanXRayThin;
