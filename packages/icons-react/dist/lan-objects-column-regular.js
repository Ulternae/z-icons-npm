import React from 'react';

export const LanObjectsColumnRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 80v144h96V80zM0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v144c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm304 208v144h96V288zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v144c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zm-112 96H48v48h96zm-96-48h96c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48M304 80v48h96V80zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z"})
);

export default LanObjectsColumnRegular;
