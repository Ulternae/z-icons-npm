import React from 'react';

export function LanTents({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m440.3 320 4.1 32H540c19.3 0 34.2-16.9 31.7-36l-23.3-184c-1.2-9.3-6.3-17.6-14.2-22.7L385.8 11.6c-10.7-7-24.5-7-35.2 0l-148.4 97.6c-4.2 2.8-7.6 6.4-10.1 10.7 15.2-3.1 31.2-1.8 45.8 4.1l130.3-85.7L516.6 136l23.3 184zM36.5 480l23.3-184 132.4-87.1v271.2H36.5zm187.7-164.7V208.8l132.4 87.1 23.3 184H329L224.2 315.2zm0 59.6L291.1 480h-66.9zM411.6 476l-23.3-184c-1.2-9.3-6.3-17.6-14.2-22.7l-148.3-97.7c-10.7-7-24.5-7-35.2 0L42.2 269.2c-7.8 5.1-13 13.4-14.2 22.7L4.8 476c-2.4 19.1 12.5 36 31.7 36h343.4c19.3 0 34.2-16.9 31.7-36"})
  );
}

export default LanTents;
