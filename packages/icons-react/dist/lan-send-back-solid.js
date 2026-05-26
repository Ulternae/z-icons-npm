import React from 'react';

export const LanSendBackSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 32v96H64V32zM64-32C28.7-32 0-3.3 0 32v96c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64V32c0-35.3-28.7-64-64-64zm448 416v96h-96v-96zm-96-64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64zm-288-80v112c0 35.3 28.7 64 64 64h112v-32c0-61.9 50.1-112 112-112h32V160c0-35.3-28.7-64-64-64H272v32c0 61.9-50.1 112-112 112z"})
);

export default LanSendBackSolid;
