import React from 'react';

export const LanBedPulseRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M467.2-22.4 508 32h44c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56c-7.6 0-14.7-3.6-19.2-9.6l-24.1-32.1-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L323.2 80H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h56c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5c3.6-7.6 10.9-12.8 19.3-13.7s16.6 2.7 21.6 9.5M272 200c0-24.7 15.9-45.6 38.1-53.1l14 21c6.9 10.4 16.2 18.6 26.9 24.1h-23c-4.4 0-8 3.6-8 8v136h208v-72c0-39.8-32.2-72-72-72h-39c13.9-7.2 25.3-18.7 32.2-33.3L456 144c66.3 0 120 53.7 120 120v192c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72H48v72c0 13.3-10.7 24-24 24S0 469.3 0 456V56c0-13.3 10.7-24 24-24s24 10.7 24 24v280h224zm-80 24a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanBedPulseRegular;
