import React from 'react';

export const LanMicrowaveRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h352v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm368 120v144c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24m-312-24c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24z"})
);

export default LanMicrowaveRegular;
