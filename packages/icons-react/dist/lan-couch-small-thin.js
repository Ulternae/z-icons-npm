import React from 'react';

export const LanCouchSmallThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 176v53.4c18.9 9 32 28.3 32 50.6v40h288v-40c0-22.3 13.1-41.6 32-50.6V176c0-53-43-96-96-96H176c-53 0-96 43-96 96m-16 48.6V176c0-61.9 50.1-112 112-112h160c61.9 0 112 50.1 112 112v48.6c2.6-.4 5.3-.6 8-.6 30.9 0 56 25.1 56 56v96c0 37.1-28 67.6-64 71.6V472c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H80v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24.4c-36-4-64-34.5-64-71.6v-96c0-30.9 25.1-56 56-56 2.7 0 5.4.2 8 .6M440 432c30.9 0 56-25.1 56-56v-96c0-22.1-17.9-40-40-40s-40 17.9-40 40v48c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-48c0-22.1-17.9-40-40-40s-40 17.9-40 40v96c0 30.9 25.1 56 56 56z"})
);

export default LanCouchSmallThin;
