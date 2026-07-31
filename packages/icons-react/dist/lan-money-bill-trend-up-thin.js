import React from 'react';

export const LanMoneyBillTrendUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 8c0-4.4-3.6-8-8-8H370.2c-4.4 0-8 3.6-8 8s3.6 8 8 8h82.5L287.6 181.1 181.2 89.9c-3-2.6-7.5-2.6-10.5.1l-128 112c-3.3 2.9-3.7 8-.8 11.3s8 3.7 11.3.8L176 106.7l106.7 91.5c3.2 2.7 7.9 2.5 10.9-.4L464 27.3v82.5c0 4.4 3.6 8 8 8s8-3.6 8-8zm-16 264c17.7 0 32 14.3 32 32v24c-30.9 0-56-25.1-56-56zm-376 0h336c0 39.8 32.2 72 72 72v80c-39.8 0-72 32.2-72 72H88c0-39.8-32.2-72-72-72v-80c39.8 0 72-32.2 72-72m352 224c0-30.9 25.1-56 56-56v24c0 17.7-14.3 32-32 32zM16 440c30.9 0 56 25.1 56 56H48c-17.7 0-32-14.3-32-32zm56-168c0 30.9-25.1 56-56 56v-24c0-17.7 14.3-32 32-32zm-24-16c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm160 128a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
);

export default LanMoneyBillTrendUpThin;
