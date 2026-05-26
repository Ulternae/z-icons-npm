import React from 'react';

export const LanPrescriptionBottleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 16c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32zM0 80c0 20.9 13.4 38.7 32 45.3V448c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V125.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48zm48 336h80c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-80h80c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-80h80c4.4 0 8-3.6 8-8s-3.6-8-8-8H48v-80h288v320c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48z"})
);

export default LanPrescriptionBottleThin;
