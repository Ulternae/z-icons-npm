import React from 'react';

export const LanPersonMilitaryPointingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 39c0-13 10-23.8 22.9-24.9L366.7 1.4C376 .7 384 8 384 17.4V48c0 8.8-7.2 16-16 16H217c-13.8 0-25-11.2-25-25M0 248c0-13.3 10.7-24 24-24h288.6c42.9 0 82.5 22.9 103.9 60l92.3 160c6.6 11.5 2.7 26.2-8.8 32.8s-26.2 2.7-32.8-8.8L384 323.8V480c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V272H24c-13.3 0-24-10.7-24-24m240 24v82.1l73.4-82.1zm0 192h96v-32h-96zm96-145.2L277.7 384H336zM208 112c0-5.5.6-10.8 1.6-16h50.7c-2.7 4.7-4.3 10.2-4.3 16 0 17.7 14.3 32 32 32s32-14.3 32-32c0-5.8-1.6-11.3-4.3-16h50.7c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80"})
);

export default LanPersonMilitaryPointingRegular;
