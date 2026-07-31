import React from 'react';

export const LanPersonSeatRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M168 72a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-80 88c13.3 0 24 10.7 24 24v176c0 39.8 32.2 72 72 72h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-66.3 0-120-53.7-120-120V184c0-13.3 10.7-24 24-24m120 64v88c0 13.3 10.7 24 24 24h8V224c0-8.8-7.2-16-16-16s-16 7.2-16 16m80 0v112h24c39.8 0 72 32.2 72 72v56h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-80c0-13.3-10.7-24-24-24h-80c-39.8 0-72-32.2-72-72v-88c0-35.3 28.7-64 64-64s64 28.7 64 64"})
);

export default LanPersonSeatRegular;
