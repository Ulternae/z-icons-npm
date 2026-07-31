import React from 'react';

export const LanEnvelopeRibbonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 160c70.7 0 128 57.3 128 128 0 40.4-18.8 76.4-48 99.9V493c0 10.5-8.5 19-19 19-3.3 0-6.5-.9-9.4-2.5L512 480l-51.6 29.5c-2.9 1.6-6.1 2.5-9.4 2.5-10.5 0-19-8.5-19-19V387.8c-29.2-23.5-48-59.5-48-99.9 0-70.7 57.3-128 128-128zm0-96c34 0 61.7 26.5 63.8 60-19.8-7.7-41.3-12-63.8-12H125.4c-7.4 0-13.4 6-13.4 13.4 0 4.2 2 8.2 5.3 10.7l178.5 135.4c11.8 9 27.5 10.5 40.6 4.6-.3 3.9-.4 7.9-.4 11.9 0 12.8 1.4 25.3 4 37.3-24.9 5.8-51.8.7-73.2-15.5L112 192.3V384c0 8.8 7.2 16 16 16h248.3c2.5 3 5 5.9 7.7 8.7V448H128c-35.3 0-64-28.7-64-64V128h.2c0-.9-.2-1.7-.2-2.6C64 91.5 91.5 64 125.4 64zm0 176a48 48 0 1 0 0 96 48 48 0 1 0 0-96"})
);

export default LanEnvelopeRibbonRegular;
