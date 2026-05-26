import React from 'react';

export const LanPrescriptionBottlePill = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 32c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM32 96c0 20.9 13.4 38.7 32 45.3V448c0 35.3 28.7 64 64 64h148c-7.2-10-13.4-20.7-18.6-32H128c-17.7 0-32-14.3-32-32v-32h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-48h256v81.4c10.2-4.7 20.9-8.5 32-11.4v-72.8c18.6-6.6 32-24.4 32-45.3v-48c0-26.5-21.5-48-48-48L80 0C53.5 0 32 21.5 32 48zm400 416c-25.2 0-48.4-8.3-67.1-22.3l156.8-156.8c14 18.7 22.3 41.9 22.3 67.1 0 61.9-50.1 112-112 112m67.1-201.7L342.3 467.1c-14-18.7-22.3-41.9-22.3-67.1 0-61.9 50.1-112 112-112 25.2 0 48.4 8.3 67.1 22.3M432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288"})
);

export default LanPrescriptionBottlePill;
