import React from 'react';

export const LanBookDeadRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 88C0 39.4 39.4 0 88 0h288c39.8 0 72 32.2 72 72v256c0 25-12.7 47-32 59.9V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80zm80 312c-17.7 0-32 14.3-32 32s14.3 32 32 32h288v-64zm-32-41.3c9.8-4.3 20.6-6.7 32-6.7h296c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H88c-22.1 0-40 17.9-40 40zm224-163.5v4.8c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-4.8c-19.4-11.7-32-30.3-32-51.2 0-35.3 35.8-64 80-64s80 28.7 80 64c0 20.9-12.6 39.5-32 51.2M208 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0m48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m74.8 73.2c3.8 10.4-1.6 21.9-12 25.6L282.5 272l36.3 13.2c10.4 3.8 15.7 15.3 12 25.6s-15.3 15.7-25.6 12L224 293.3l-81.2 29.5c-10.4 3.8-21.9-1.6-25.6-12s1.6-21.9 12-25.6l36.3-13.2-36.3-13.2c-10.4-3.8-15.7-15.3-12-25.6s15.2-15.7 25.6-12l81.2 29.5 81.2-29.5c10.4-3.8 21.9 1.6 25.6 12"})
);

export default LanBookDeadRegular;
