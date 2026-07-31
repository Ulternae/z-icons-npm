import React from 'react';

export const LanEnvelopeOpenTextRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -18.225 576 530.225',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M523.5 125.2c7 4.8 12.4 11.3 16 18.8h-73.3L310.8 36.8a40.07 40.07 0 0 0-45.4 0l-185 127.6 183.4 139.1c2.6 1.9 5.3 3.5 8.2 4.8v49.9c-13.2-2.4-26-7.9-37.2-16.4L80 224.3V416c0 8.9 7.2 16 16 16h176v48H96c-35.4 0-64-28.7-64-64V164c.1-15.5 7.8-30 20.5-38.8L238-2.7c30.1-20.7 69.8-20.7 99.9 0zM320 240c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48zm56 40c0 13.3 10.7 24 24 24h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96c-13.3 0-24 10.7-24 24m0 96c0 13.3 10.7 24 24 24h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-13.3 0-24 10.7-24 24"})
);

export default LanEnvelopeOpenTextRegular;
