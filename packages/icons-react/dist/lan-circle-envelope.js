import React from 'react';

export const LanCircleEnvelope = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m112-320v8.5l-104.4 55.1c-2.3 1.2-5 1.9-7.6 1.9s-5.3-.6-7.6-1.9L144 200.5V192c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16M144 320v-83.3l89.5 47.2c6.9 3.7 14.7 5.6 22.5 5.6s15.6-1.9 22.5-5.6l89.5-47.2V320c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16m16-176c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48z"})
);

export default LanCircleEnvelope;
