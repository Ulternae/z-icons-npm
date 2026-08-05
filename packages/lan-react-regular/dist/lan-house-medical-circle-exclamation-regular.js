import React from 'react';

export function LanHouseMedicalCircleExclamationRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -0.05 640 544.05',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 6.1c-9.1-8.2-22.9-8.2-32 0l-232 208c-9.9 8.8-10.7 24-1.8 33.9s24 10.7 33.9 1.8l8-7.2v205.3c0 35.3 28.7 64 64 64h196c-10.5-14.6-19-30.7-25.1-48l-171 .1c-8.8 0-16-7.2-16-16V199.7L288 56.3l172.9 155c11.4-2.1 23.1-3.2 35.1-3.2 12.7 0 25.2 1.2 37.2 3.6zm1.5 369.8c5.8-46.7 28.5-88.2 61.6-118.3-2.1-1.1-4.6-1.7-7.1-1.7h-40v-40c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40h-40c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h40v40c0 8.8 7.2 16 16 16h32c.5 0 1 0 1.5-.1zM496 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40m0-140c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16"})
  );
}

export default LanHouseMedicalCircleExclamationRegular;
