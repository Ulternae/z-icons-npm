import React from 'react';

export const LanTrashArrowTurnLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8h115.6c13.3 0 25.3 8.3 30 20.8L328 48h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 96 0 85.3 0 72s10.7-24 24-24h96zm-84.6 448L28.7 144h48.2l22.6 305.2c.6 8.4 7.6 14.8 16 14.8h217.1c8.4 0 15.3-6.5 16-14.8L371.2 144h48.1l-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3H115.5c-33.5 0-61.3-25.9-63.8-59.3zM225 191c9.4 9.4 9.4 24.6 0 33.9l-23 23h30.1c48.6 0 88 39.4 88 88v24c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24c0-22.1-17.9-40-40-40H202l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c9.4-9.4 24.6-9.4 33.9 0z"})
);

export default LanTrashArrowTurnLeftRegular;
