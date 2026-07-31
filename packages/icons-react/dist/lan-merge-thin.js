import React from 'react';

export const LanMergeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 72c0-4.4 3.6-8 8-8h106c31.4 0 60.9 15.4 78.8 41.2l75.5 108.5c15 21.5 39.5 34.3 65.7 34.3h150.7l-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l80 80c3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l66.3-66.4H334c-26.2 0-50.7 12.8-65.7 34.3l-75.5 108.5C174.9 432.6 145.4 448 114 448H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h106c26.2 0 50.7-12.8 65.7-34.3l75.5-108.5c10.3-14.8 24.4-26.2 40.4-33.2-16.1-7-30.1-18.4-40.4-33.2l-75.5-108.5C164.7 92.8 140.2 80 114 80H8c-4.4 0-8-3.6-8-8"})
);

export default LanMergeThin;
