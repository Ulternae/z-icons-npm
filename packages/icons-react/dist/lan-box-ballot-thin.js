import React from 'react';

export const LanBoxBallotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -28.125 512 540.125',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M149.3 144c-12.5-12.5-12.5-32.8 0-45.3L250.8-2.7c12.5-12.5 32.8-12.5 45.3 0L378.7 80c12.5 12.5 12.5 32.8 0 45.3L277.2 226.7c-12.5 12.5-32.8 12.5-45.3 0zm71.4 94c.7.7 1.4 1.3 2.1 1.9L112 240c-4.4 0-8 3.6-8 8s3.6 8 8 8h288c4.4 0 8-3.6 8-8s-3.6-8-8-8H286.5c.7-.6 1.4-1.3 2.1-1.9l101.5-101.6c18.7-18.7 18.7-49.1 0-67.9l-82.7-82.7c-18.7-18.7-49.1-18.7-67.9 0L137.9 87.5c-18.7 18.7-18.7 49.1 0 67.9l82.7 82.7zM443 144h5c26.5 0 48 21.5 48 48v128H16V192c0-26.5 21.5-48 48-48h14.2c-1.3-5.3-2.1-10.6-2.5-16H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35-28.1-63.4-62.9-64-1.5 5.5-3.5 10.8-6 16zm53 192v112c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V336z"})
);

export default LanBoxBallotThin;
