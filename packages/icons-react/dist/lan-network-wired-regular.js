import React from 'react';

export const LanNetworkWiredRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 80v64h96V80zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-24v40h240c13.3 0 24 10.7 24 24s-10.7 24-24 24H440v40h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h24v-40H184v40h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h24v-40H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h240v-40h-24c-26.5 0-48-21.5-48-48zm16 288h-96v64h96zm160 0v64h96v-64z"})
);

export default LanNetworkWiredRegular;
