import React from 'react';

export const LanChairRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 0C135.6 0 64 71.6 64 160v96H48c-26.5 0-48 21.5-48 48v48c0 20.9 13.4 38.7 32 45.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h288v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-90.7c18.6-6.6 32-24.4 32-45.3v-48c0-26.5-21.5-48-48-48h-16v-96C384 71.6 312.4 0 224 0m112 256h-40V74.2c24.5 20.5 40 51.4 40 85.8zM248 50.6V256h-48V50.6c7.7-1.7 15.8-2.6 24-2.6s16.3.9 24 2.6m-96 23.6V256h-40v-96c0-34.4 15.5-65.2 40-85.8M48 352v-48h352v48z"})
);

export default LanChairRegular;
