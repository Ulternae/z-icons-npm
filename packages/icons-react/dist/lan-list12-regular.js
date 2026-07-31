import React from 'react';

export const LanList12Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 72c0 13.3 10.7 24 24 24h24v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h96c13.3 0 24-10.7 24-24s-10.7-24-24-24H96V72c0-13.3-10.7-24-24-24H24C10.7 48 0 58.8 0 72m192 24c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H216c-13.3 0-24 10.7-24 24m0 160c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H216c-13.3 0-24 10.7-24 24m0 160c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H216c-13.3 0-24 10.7-24 24M70 288c-14.3 0-28.2 4.6-39.6 13.2L9.6 316.8c-10.6 8-12.8 23-4.8 33.6s23 12.8 33.6 4.8l20.8-15.6c3.1-2.3 6.9-3.6 10.8-3.6h4.9c7.2 0 13.1 5.9 13.1 13.1 0 4.2-2 8.1-5.4 10.6L12.1 411C4.5 416.5 0 425.3 0 434.7 0 450.9 13.1 464 29.3 464H120c13.3 0 24-10.7 24-24s-10.7-24-24-24H86.8l24-17.5c15.8-11.5 25.2-29.9 25.2-49.4 0-33.7-27.4-61.1-61.1-61.1z"})
);

export default LanList12Regular;
