import React from 'react';

export const LanRubleSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 56c0-13.3 10.7-24 24-24h136c79.5 0 144 64.5 144 144s-64.5 144-144 144H128v48h168c13.3 0 24 10.7 24 24s-10.7 24-24 24H128v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-48H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40zm48 216h112c53 0 96-43 96-96s-43-96-96-96H128z"})
);

export default LanRubleSignRegular;
