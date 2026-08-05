import React from 'react';

export function LanDroneAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 112c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H160v64h320v-64H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H512v96c0 4.6-2 9-5.5 12l-46.8 40.9 1.1 1.4 28.8 38.4c14.5 19.4 22.4 43 22.4 67.2v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-17.3-5.6-34.2-16-48L435.6 298l-57.1 49.9c-2.9 2.6-6.7 4-10.5 4h-96c-3.9 0-7.6-1.4-10.5-4l-57.1-49.8L176 336c-10.4 13.8-16 30.7-16 48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-24.2 7.9-47.8 22.4-67.2l28.8-38.4 1.1-1.4-46.8-40.9c-3.5-3-5.5-7.4-5.5-12v-96H16c-8.8 0-16-7.2-16-16zm168.3 112L278 320h84l109.7-96z"})
  );
}

export default LanDroneAlt;
