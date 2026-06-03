import React from 'react';

export const LanWifiSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.013 -31.95 576.126 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 34l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-243-243c38 8.4 71.5 29 95.9 57.7 8.6 10.1 23.8 11.3 33.8 2.7s11.3-23.8 2.7-33.8c-41-48-102.2-78.6-170.4-78.6-4.6 0-9.2.1-13.7.4L167.2 101.3C204.9 87.5 245.6 80 288.1 80c96.4 0 183.6 38.7 247.2 101.4 9.4 9.3 24.6 9.2 33.9-.2s9.2-24.6-.2-33.9C496.8 76 397.5 32 288.1 32 232 32 178.7 43.5 130.3 64.3zm38 173.7-34.3-34.3c-13.2 10.1-25.8 21.1-37.6 32.8-9.4 9.3-9.5 24.5-.2 33.9s24.5 9.5 33.9.2c11.9-11.8 24.7-22.7 38.2-32.6m127.3 127.3-35.2-35.2c-20.1 12.4-38.2 27.8-53.5 45.7-8.6 10.1-7.4 25.2 2.7 33.8s25.2 7.4 33.8-2.7c14.5-17 32.2-31.2 52.1-41.7zM336.1 432a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanWifiSlashRegular;
