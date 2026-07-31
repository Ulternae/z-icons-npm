import React from 'react';

export const LanWineGlassThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320.1 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56.3 5.7C57.4 2.3 60.5 0 64 0h192c3.5 0 6.6 2.3 7.7 5.7l49.7 163.2c4.4 14.6 6.7 29.7 6.7 44.9 0 84.4-67.8 153-152 154.2v160h88c4.4 0 8 3.6 8 8s-3.6 8-8 8H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h88V368C67.8 366.8 0 298.2 0 213.8c0-15.2 2.3-30.4 6.7-44.9zM32 140.6l-10 32.9c-4 13-6 26.6-6 40.2 0 76.3 61.9 138.2 138.2 138.2h11.5c76.3 0 138.2-61.9 138.2-138.2 0-13.6-2-27.2-6-40.2l-10-32.9v3.4h-256v-3.4zm3.8-12.6h248.3L250 16H69.9z"})
);

export default LanWineGlassThin;
