import React from 'react';

export function LanShuttleSpaceVerticalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 544H48c-26.5 0-48-21.5-48-48v-50c0-40.6 11-80.4 31.9-115.2L128 170.7V152c0-69.3 22.7-135 81.6-179.2 8.5-6.4 20.3-6.4 28.8 0C297.3 17 320 82.7 320 152v18.7l96.1 160.1C437 365.6 448 405.4 448 446v50c0 26.5-21.5 48-48 48m-80-280v112c8.6 6.5 15.9 14.6 21.3 24h52.6c-4.2-15.6-10.6-30.6-19-44.5zm80 184h-48v48h48zM128 264l-54.9 91.5c-8.4 14-14.7 28.9-19 44.5h52.6c5.4-9.4 12.7-17.5 21.3-24zM48 496h48v-48H48zm104 0h152v-56c0-12.7-7.4-23.8-18.3-28.9-8.4-4-13.7-12.4-13.7-21.7V152c0-32.6-5.8-62.4-18.5-88h-59.1c-12.6 25.6-18.4 55.4-18.4 88v237.4c0 9.3-5.3 17.7-13.7 21.7-10.9 5.2-18.3 16.2-18.3 28.9v56zm40-368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16"})
  );
}

export default LanShuttleSpaceVerticalRegular;
