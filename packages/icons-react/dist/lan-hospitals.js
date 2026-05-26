import React from 'react';

export const LanHospitals = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 0c-35.3 0-64 28.7-64 64v32H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm176 480v-80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v80h-48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32zm-32 0h-64v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM64 128h160v320c0 11.7 3.1 22.6 8.6 32H64c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32m320-32v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32V96c0-8.8-7.2-16-16-16s-16 7.2-16 16m-256 96v32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16"})
);

export default LanHospitals;
