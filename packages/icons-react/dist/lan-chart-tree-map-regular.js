import React from 'react';

export const LanChartTreeMapRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 112v72H48v-72zM48 64C21.5 64 0 85.5 0 112v72c0 26.5 21.5 48 48 48h112c26.5 0 48-21.5 48-48v-72c0-26.5-21.5-48-48-48zm112 264v72H48v-72zM48 280c-26.5 0-48 21.5-48 48v72c0 26.5 21.5 48 48 48h112c26.5 0 48-21.5 48-48v-72c0-26.5-21.5-48-48-48zM296 64c-22.1 0-40 17.9-40 40v16c0 22.1 17.9 40 40 40h176c22.1 0 40-17.9 40-40v-16c0-22.1-17.9-40-40-40zm-40 184v16c0 22.1 17.9 40 40 40h176c22.1 0 40-17.9 40-40v-16c0-22.1-17.9-40-40-40H296c-22.1 0-40 17.9-40 40m40 104c-22.1 0-40 17.9-40 40v16c0 22.1 17.9 40 40 40h176c22.1 0 40-17.9 40-40v-16c0-22.1-17.9-40-40-40z"})
);

export default LanChartTreeMapRegular;
