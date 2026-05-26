import React from 'react';

export const LanWindTurbineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M301.5 182.3c-1-6.8.2-13.8 3.5-19.9L397.4-8.4 245.1 112.2c-5.4 4.3-12.1 6.7-19 6.9L32 124.5l180.6 71.6c6.4 2.5 11.9 7.1 15.5 13l101.8 165.4-28.4-192.1zm44.2 189.8c2.5 17.2-20.3 25.5-29.5 10.7L214.4 217.4c-1.8-2.9-4.5-5.2-7.7-6.5L26.1 139.4C9.9 133 14.2 109 31.6 108.6l194.1-5.4c3.5-.1 6.8-1.3 9.5-3.5L387.4-21c13.6-10.8 32.3 4.8 24 20.1L319.1 170c-1.6 3-2.3 6.5-1.8 9.9L345.7 372zm-105.2-51.3V496h32V372.8l16 26V496h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-240c-4.4 0-8-3.6-8-8s3.6-8 8-8h88V294.8zm16-168.8a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanWindTurbineThin;
