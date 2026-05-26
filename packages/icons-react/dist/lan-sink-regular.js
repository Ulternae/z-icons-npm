import React from 'react';

export const LanSinkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 88c0-22.1 17.9-40 40-40s40 17.9 40 40v24c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6-39.4-88-88-88s-88 39.4-88 88v200h-72v-40c0-30.9-25.1-56-56-56H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c4.4 0 8 3.6 8 8v40H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v56c0 66.3 53.7 120 120 120h208c66.3 0 120-53.7 120-120v-56h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88v-40c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-30.9 0-56 25.1-56 56v40h-72zm152 248v56c0 39.8-32.2 72-72 72H152c-39.8 0-72-32.2-72-72v-56z"})
);

export default LanSinkRegular;
