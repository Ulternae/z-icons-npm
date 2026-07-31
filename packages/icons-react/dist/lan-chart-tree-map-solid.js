import React from 'react';

export const LanChartTreeMapSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 112c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm0 224c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zM296 64h176c22.1 0 40 17.9 40 40v16c0 22.1-17.9 40-40 40H296c-22.1 0-40-17.9-40-40v-16c0-22.1 17.9-40 40-40m-40 184c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v16c0 22.1-17.9 40-40 40H296c-22.1 0-40-17.9-40-40zm40 104h176c22.1 0 40 17.9 40 40v16c0 22.1-17.9 40-40 40H296c-22.1 0-40-17.9-40-40v-16c0-22.1 17.9-40 40-40"})
);

export default LanChartTreeMapSolid;
