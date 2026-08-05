import React from 'react';

export function LanChestnutThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M340 152c-14.4-14.4-73.5-63.9-105.9-90.9-5.9-4.9-14.3-4.9-20.2 0C181.5 88 122.4 137.6 108 152c-48 48-92 112-92 200 0 5.4.4 10.8 1.1 16h413.7c.7-5.2 1.1-10.6 1.1-16 0-88-44-152-92-200zM20.6 384c13.8 46.3 56.6 80 107.4 80h192c50.7 0 93.6-33.7 107.4-80zm330.7-243.3C400.8 190.2 448 258 448 352c0 70.7-57.3 128-128 128H128C57.3 480 0 422.7 0 352c0-94 47.2-161.8 96.7-211.3 15-15 75-65.3 107-91.9 11.8-9.8 28.8-9.8 40.6 0 32 26.6 92 76.8 107 91.9"})
  );
}

export default LanChestnutThin;
