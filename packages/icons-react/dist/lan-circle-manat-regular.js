import React from 'react';

export const LanCircleManatRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-392v9.1c-58.7 7.8-104 58.1-104 118.9v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-34.3 23.9-62.9 56-70.2V352c0 8.8 7.2 16 16 16s16-7.2 16-16V177.8c32.1 7.3 56 36 56 70.2v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-60.8-45.3-111.1-104-118.9V120c0-8.8-7.2-16-16-16s-16 7.2-16 16"})
);

export default LanCircleManatRegular;
