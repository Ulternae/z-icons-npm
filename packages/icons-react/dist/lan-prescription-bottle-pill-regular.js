import React from 'react';

export const LanPrescriptionBottlePillRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 48v48H80V48zM32 96c0 20.9 13.4 38.7 32 45.3V448c0 35.3 28.7 64 64 64h148c-10.5-14.6-19-30.7-25.1-48H128c-8.8 0-16-7.2-16-16v-16h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-48h224v89.7c14.9-8.6 31-15.3 48-19.6v-72.8c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H80C53.5 0 32 21.5 32 48zm400 400c-17.8 0-34.5-4.8-48.8-13.3l131.5-131.5c8.4 14.3 13.3 31 13.3 48.8 0 53-43 96-96 96m48.8-178.7L349.3 448.8c-8.4-14.3-13.3-31-13.3-48.8 0-53 43-96 96-96 17.8 0 34.5 4.8 48.8 13.3M432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288"})
);

export default LanPrescriptionBottlePillRegular;
