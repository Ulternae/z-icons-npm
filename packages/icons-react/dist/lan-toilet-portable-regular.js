import React from 'react';

export const LanToiletPortableRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-8.8 0-16 7.2-16 16v32h224V64c0-8.8-7.2-16-16-16zM48 432h224V320h-8c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h8v-80H48zm224 56v-8H48v8c0 13.3-10.7 24-24 24S0 501.3 0 488V64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v424c0 13.3-10.7 24-24 24s-24-10.7-24-24"})
);

export default LanToiletPortableRegular;
