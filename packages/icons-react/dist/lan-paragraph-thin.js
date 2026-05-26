import React from 'react';

export const LanParagraphThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 0C71.6 0 0 71.6 0 160s71.6 160 160 160h112v184c0 4.4 3.6 8 8 8s8-3.6 8-8V16h80v488c0 4.4 3.6 8 8 8s8-3.6 8-8V16h56c4.4 0 8-3.6 8-8s-3.6-8-8-8zm112 16v288H160c-79.5 0-144-64.5-144-144S80.5 16 160 16z"})
);

export default LanParagraphThin;
