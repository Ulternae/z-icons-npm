import React from 'react';

export const LanSkeletonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0c13.3 0 24 10.7 24 24v56h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v48h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v48h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v80h72c48.6 0 88 39.4 88 88 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-22.1-17.9-40-40-40H160c-22.1 0-40 17.9-40 40 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88h72v-80H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h112v-48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h208v-48H88c-13.3 0-24-10.7-24-24s10.7-24 24-24h144V24c0-13.3 10.7-24 24-24"})
);

export default LanSkeletonRegular;
