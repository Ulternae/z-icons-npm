import React from 'react';

export function LanScalpelLineDashed({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m172.9 352-95.8 96h40.8c59.4 0 116.4-23.6 158.4-65.6l30.4-30.4zM474.8 49.4 204.8 320H352c12 0 23.5-4.8 32-13.3l174.7-174.6c11.1-11.1 17.2-26.1 17.2-41.7-.1-32.1-26.5-58.4-59-58.4-15.8 0-31 6.3-42 17.4zm133 40.9c.1 24.2-9.4 47.4-26.5 64.5L406.6 329.4C392.1 343.9 372.5 352 352 352l-53 53c-48 48-113.1 75-181 75H0l31.9-32L452.2 26.8C469.3 9.7 492.7 0 516.9 0c49.9 0 90.8 40.3 91 90.2zM336 448h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16m176 0h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanScalpelLineDashed;
