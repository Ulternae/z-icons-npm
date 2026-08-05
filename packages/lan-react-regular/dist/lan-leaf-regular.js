import React from 'react';

export function LanLeafRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M471.3 6.7c6.4-6.1 15.7-8.3 24.3-5.5C505.4 4.5 512 13.7 512 24v186.9C512 342.1 403.9 448 273.2 448c-81.5 0-151.3-55.6-171.4-131.2C68.7 347.4 48 391.3 48 440v16c0 13.3-10.7 24-24 24S0 469.2 0 456v-16c0-75.1 38.3-141.2 96.4-179.9C102.5 168.4 178.8 96 272 96c66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3zM464 79.9C425.7 109.4 361.6 144 272 144c-57.6 0-106.4 38.1-122.4 90.4 20.9-6.8 43.2-10.4 66.4-10.4h80c13.3 0 24 10.8 24 24s-10.7 24-24 24h-80c-25.4 0-49.4 5.7-71 15.8 7.9 63.1 62.6 112.2 128.2 112.2C377.9 400 464 315.1 464 210.9z"})
  );
}

export default LanLeafRegular;
