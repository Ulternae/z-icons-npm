import React from 'react';

export const LanGoalNetRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M488 32c48.6 0 88 39.4 88 88v336c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40v336c0 13.3-10.7 24-24 24S0 469.3 0 456V120c0-48.6 39.4-88 88-88zm-80 96c13.3 0 24 10.7 24 24v24h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v48h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v48h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-72v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-72v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-48h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-48h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-24l.1-2.5c1.2-12.1 11.5-21.5 23.9-21.5s22.6 9.4 23.9 21.5l.1 2.5v24h72v-24c0-13.3 10.7-24 24-24s24 10.7 24 24v24h72v-24c0-13.3 10.7-24 24-24M192 368h72v-48h-72zm120 0h72v-48h-72zm-120-96h72v-48h-72zm120 0h72v-48h-72z"})
);

export default LanGoalNetRegular;
