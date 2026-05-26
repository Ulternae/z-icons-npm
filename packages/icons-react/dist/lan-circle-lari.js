import React from 'react';

export const LanCircleLari = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-392c0-8.8-7.2-16-16-16s-16 7.2-16 16v13.2c-53.1 15.6-91.9 64.7-91.9 122.8 0 38.2 16.8 72.5 43.3 96H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-91.9c-53 0-96-43-96-96 0-40.2 24.8-74.7 59.9-89v49c0 8.8 7.2 16 16 16s16-7.2 16-16v-55.9c1.4-.1 2.7-.1 4.1-.1 4 0 8 .2 11.9.7V216c0 8.8 7.2 16 16 16s16-7.2 16-16v-45.4c25.5 13.1 44.3 37.3 50.2 66.2 1.8 8.7 10.2 14.3 18.9 12.5s14.3-10.2 12.5-18.9c-8.9-43.9-40.3-79.6-81.6-94.7V120c0-8.8-7.2-16-16-16s-16 7.2-16 16v8.5c-3.9-.4-7.9-.5-11.9-.5-1.4 0-2.8 0-4.1.1z"})
);

export default LanCircleLari;
