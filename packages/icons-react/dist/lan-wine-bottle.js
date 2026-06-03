import React from 'react';

export const LanWineBottle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 320 640',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16v157.3c56.5 24.7 96 81 96 146.7v224c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-65.6 39.5-122 96-146.7zm96 0h-64v64h64zm0 96h-64v72.2c0 6.8-4.3 12.8-10.7 15.1C67.6 168.9 32 216.3 32 272h256c0-55.7-35.6-103.1-85.3-120.7-6.4-2.3-10.7-8.3-10.7-15.1zM32 432h256V304H32zm0 32v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32z"})
);

export default LanWineBottle;
