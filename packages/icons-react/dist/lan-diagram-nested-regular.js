import React from 'react';

export const LanDiagramNestedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 80v96H48V80zM48 32C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h24v96c0 48.6 39.4 88 88 88h96v24c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v24h-96c-22.1 0-40-17.9-40-40v-96h24c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm352 304v96h-96v-96z"})
);

export default LanDiagramNestedRegular;
