import React from 'react';

export const LanMoneyBillTrendUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 8c0-13.3-10.7-24-24-24H354.2c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.9L286.8 143.3l-95.1-81.5c-9-7.7-22.2-7.7-31.2 0l-112 96c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l96.4-82.6 96.4 82.6c9.5 8.2 23.7 7.6 32.6-1.3l127-127v43.9c0 13.3 10.7 24 24 24s24-10.7 24-24zM103.5 304h305c3.6 29 26.6 51.9 55.5 55.5v49c-29 3.6-51.9 26.6-55.5 55.5h-305c-3.6-29-26.6-51.9-55.5-55.5v-49c28.9-3.6 51.9-26.6 55.5-55.5M48 256c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm208 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanMoneyBillTrendUpRegular;
