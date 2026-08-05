import React from 'react';

export function LanDiceD10Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -5.875 512 531.925',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M219.8 11c19.2-22.5 54-22.5 73.1 0l205.9 242.2c16.6 19.5 15 48.5-3.7 66L289.3 513c-18.5 17.4-47.3 17.4-65.8 0L17.6 319.3c-18.6-17.5-20.2-46.6-3.7-66zm36.6 49c-6.5 0-12.6 3.2-16.3 8.4l-1.4 2.4-99.1 190.5-61.4 6.8c-11 1.2-18.9 11.1-17.7 22.1s11.1 18.9 22.1 17.7l65.2-7.2 88.6 54.5V448c0 11 9 20 20 20s20-9 20-20v-92.8l88.6-54.5 65.2 7.2h4.1c9.3-.8 17-8.1 18-17.7 1.1-9.6-4.9-18.4-13.7-21.3l-3.9-.8-61.4-6.8-99.1-190.5c-3.5-6.6-10.4-10.8-17.8-10.8M334 272.7l-77.7 47.8-77.7-47.8 77.7-149.4z"})
  );
}

export default LanDiceD10Solid;
