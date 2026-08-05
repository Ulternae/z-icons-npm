import React from 'react';

export function LanHospitalsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 64c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h160zM64 464h162c-1.3-5.1-2-10.5-2-16V144H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16m288 0v-80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v80h64c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H288c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16zm24-344c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v32h32c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h32zm-240 80h16c8.8 0 16 7.2 16 16v24h24c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-24v24c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-24H96c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h24v-24c0-8.8 7.2-16 16-16"})
  );
}

export default LanHospitalsRegular;
