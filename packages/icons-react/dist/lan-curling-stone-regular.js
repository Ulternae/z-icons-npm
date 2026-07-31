import React from 'react';

export const LanCurlingStoneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M360 32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-22.1 0-40 17.9-40 40v24h184c47.8 0 86.5 38.1 87.8 85.5 37.4 13.1 64.2 48.7 64.2 90.5v64c0 53-43 96-96 96H96l-4.9-.1C40.3 477.3 0 435.4 0 384v-64c0-41.8 26.8-77.3 64.1-90.5 1.1-39.2 27.7-71.9 63.9-82.1V120c0-48.6 39.4-88 88-88zM48 384c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-8H48zm48-112c-26.5 0-48 21.5-48 48v8h416v-8c0-26.5-21.5-48-48-48zm56-80c-19.4 0-35.5 13.7-39.2 32h286.4c-3.7-18.3-19.8-32-39.2-32z"})
);

export default LanCurlingStoneRegular;
