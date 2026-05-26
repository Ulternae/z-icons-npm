import React from 'react';

export const LanSplit = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M404.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H353.2c-17 0-33.3 6.7-45.3 18.7L194.7 243.9c-4.6 4.6-9.5 8.6-14.8 12.1 5.3 3.5 10.3 7.6 14.8 12.1l113.2 113.2c12 12 28.3 18.7 45.3 18.7h104.2l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H353.2c-25.5 0-49.9-10.1-67.9-28.1L172.1 290.7c-12-12-28.3-18.7-45.3-18.7H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h110.9c17 0 33.3-6.7 45.3-18.7l113.1-113.2c18-18 42.4-28.1 67.9-28.1h104.2l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6"})
);

export default LanSplit;
