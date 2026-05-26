import React from 'react';

export const LanCircleKRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m87.4-325.6c10.2-8.5 11.6-23.6 3.1-33.8s-23.6-11.6-33.8-3.1L208 236.8V168c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-44.8l31.1-25.9 70.3 85.9c8.4 10.3 23.5 11.8 33.8 3.4s11.8-23.5 3.4-33.8L276 242.6l67.3-56.1z"})
);

export default LanCircleKRegular;
