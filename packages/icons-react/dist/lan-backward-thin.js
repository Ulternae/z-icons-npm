import React from 'react';

export const LanBackwardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M241.4 49.9C250.3 53.7 256 62.4 256 72v368c0 9.6-5.7 18.3-14.6 22.1s-19.1 1.9-26-4.7l-192-184c-4.7-4.6-7.4-10.9-7.4-17.4s2.7-12.8 7.4-17.3l192-184c6.9-6.7 17.2-8.5 26-4.7zm6.3-14.7c-14.7-6.3-31.8-3.2-43.4 7.9l-192 184C4.5 234.7 0 245.1 0 256s4.5 21.3 12.3 28.9l192 184c11.6 11.1 28.6 14.2 43.4 7.9S272 456 272 440V303.7l172.3 165.1c11.6 11.1 28.6 14.2 43.4 7.9S512 456 512 440V72c0-16-9.6-30.5-24.3-36.8s-31.8-3.2-43.4 7.9L272 208.3V72c0-16-9.6-30.5-24.3-36.8M272 230.4 455.4 54.7c6.9-6.7 17.2-8.5 26-4.7S496 62.4 496 72v368c0 9.6-5.7 18.3-14.6 22.1s-19.1 1.9-26-4.7L272 281.6z"})
);

export default LanBackwardThin;
