import React from 'react';

export const LanSquareRupeeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm56 112h48c39.8 0 72 32.2 72 72 0 26.9-14.7 50.3-36.5 62.6l19.3 57.8c4.2 12.6-2.6 26.2-15.2 30.4s-26.2-2.6-30.4-15.2L156 288h-12v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24m48 96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v48zm80 .1c0-31 25.1-56.1 56.1-56.1H344c13.3 0 24 10.7 24 24s-10.7 24-24 24h-39.9c-4.5 0-8.1 3.6-8.1 8.1 0 3.6 2.3 6.7 5.8 7.8l34.2 10.2c23.7 7.1 40 29 40 53.7 0 31-25.1 56.1-56.1 56.1l-39.9.1c-13.3 0-24-10.7-24-24s10.7-24 24-24h39.9c4.5 0 8.1-3.6 8.1-8.1 0-3.6-2.3-6.7-5.8-7.8L288 293.9c-23.7-7.1-40-29-40-53.7z"})
);

export default LanSquareRupeeSolid;
