import React from 'react';

export const LanMartiniGlassCitrusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 640 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 176c-5.7 0-11.3-.5-16.7-1.5l-32.4 40.9c15.3 5.6 31.9 8.6 49.1 8.6 79.5 0 144-64.5 144-144S575.5-64 496-64c-56.5 0-105.5 32.6-129 80h57.5c17.6-19.6 43.1-32 71.6-32 53 0 96 43 96 96s-43 96-96 96zM88 64c-9.2 0-17.6 5.3-21.6 13.6s-2.9 18.1 2.8 25.4L248 328.4V464h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64V328.4L474.8 103c5.7-7.2 6.8-17.1 2.8-25.4S465.2 64 456 64zm318.3 48L272 281.4 137.7 112z"})
);

export default LanMartiniGlassCitrusRegular;
