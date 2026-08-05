import React from 'react';

export function LanTentsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m254 132.7 114.2-75.2 133.4 87.8L521.7 304h-83.5l6.1 48h95.6c19.3 0 34.2-16.9 31.7-36l-23.3-184c-1.2-9.3-6.3-17.6-14.2-22.7L385.8 11.6c-10.7-7-24.5-7-35.2 0l-148.4 97.6c-4.2 2.8-7.6 6.4-10.1 10.7 20.4-4.2 42-.3 60.1 11.5l1.8 1.2zM361.7 464h-59.3l-70.3-115.6V233.3l109.4 72L361.6 464zM184.2 233.3V464H54.7l20.1-158.7zm6.4-61.7L42.2 269.2c-7.8 5.1-13 13.4-14.2 22.7L4.8 476c-2.4 19.1 12.5 36 31.7 36h343.4c19.3 0 34.2-16.9 31.7-36l-23.3-184c-1.2-9.3-6.3-17.6-14.2-22.7l-148.3-97.7c-10.7-7-24.5-7-35.2 0"})
  );
}

export default LanTentsRegular;
