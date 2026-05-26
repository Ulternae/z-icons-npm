import React from 'react';

export const LanUserCrown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m212.7-11.3-26.5 26.4c-5.7 5.7-13.4 8.9-21.4 8.9-5.5 0-10.9-1.5-15.6-4.3l-29-17.4c-4.9-3-11.1-3-16.1-.2S96 10.2 96 16v128c0 70.7 57.3 128 128 128s128-57.3 128-128V16c0-5.8-3.1-11.1-8.1-13.9s-11.2-2.8-16.1.2l-29 17.4c-4.7 2.8-10.1 4.3-15.6 4.3-8 0-15.7-3.2-21.4-8.9l-26.5-26.4c-6.2-6.2-16.4-6.2-22.6 0M224 22.6l15.1 15.1c11.7 11.7 27.5 18.2 44.1 18.2 11.3 0 22.4-3.1 32.1-8.9l4.8-2.9v67.7h-192V44.1l4.8 2.9c9.7 5.8 20.8 8.9 32.1 8.9 16.5 0 32.4-6.6 44.1-18.2zm0 217.4c-53 0-96-43-96-96h192c0 53-43 96-96 96M32 496c0-79.5 64.5-144 144-144h96c79.5 0 144 64.5 144 144 0 8.8 7.2 16 16 16s16-7.2 16-16c0-97.2-78.8-176-176-176h-96C78.8 320 0 398.8 0 496c0 8.8 7.2 16 16 16s16-7.2 16-16"})
);

export default LanUserCrown;
