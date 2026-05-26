import React from 'react';

export const LanChimney = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 64h384v64H32zm0 96v304c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h96v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h192v48c0 8.8 7.2 16 16 16s16-7.2 16-16V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32m352 0v96H192v-96zm-224 0v96H64v-96zm16 224H64v-96h192v96zm112 0v-96h96v96z"})
);

export default LanChimney;
