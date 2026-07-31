import React from 'react';

export const LanSwatchbookRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 400c0 61.9 50.1 112 112 112h328c39.8 0 72-32.2 72-72v-80c0-35.4-25.6-64.9-59.3-70.9L405.8 336H440c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H209.9L431 242.9c28.1-28.1 28.1-73.7 0-101.8L370.9 81c-27.2-27.2-70.6-28.1-98.9-2.8v67.7l31-31c9.4-9.4 24.6-9.4 33.9 0l60.2 60.1c9.4 9.4 9.4 24.6 0 33.9L224 382.1V72c0-39.8-32.2-72-72-72H72C32.2 0 0 32.2 0 72zm112 64c-35.3 0-64-28.7-64-64v-96h128v96c0 35.3-28.7 64-64 64M48 256v-80h128v80zm0-128V72c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v56zm64 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanSwatchbookRegular;
