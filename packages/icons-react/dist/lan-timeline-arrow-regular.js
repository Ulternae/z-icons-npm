import React from 'react';

export const LanTimelineArrowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m48 0c0 35.8-23.5 66.1-56 76.3V232h208v-59.7c-32.5-10.2-56-40.5-56-76.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V232h118.1l-23-23c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23H248v59.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3v-59.7H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-59.7C39.5 162.1 16 131.8 16 96c0-44.2 35.8-80 80-80s80 35.8 80 80m16 320a32 32 0 1 0 64 0 32 32 0 1 0-64 0m160-288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanTimelineArrowRegular;
