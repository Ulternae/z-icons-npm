import React from 'react';

export const LanBabyCarriageRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 192h-32V32c0-17.7-14.3-32-32-32h-24C139.2 0 64 75.2 64 168v120c0 53 43 96 96 96h192c53 0 96-43 96-96V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24v40zm80 48v48c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48v-48zM240 48v144H112v-24c0-66.3 53.7-120 120-120zM112 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96m288 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanBabyCarriageRegular;
