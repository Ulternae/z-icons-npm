import React from 'react';

export function LanLightbulbMessageRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 192c0 17-2.9 33.2-8.3 48.4 2.7-.2 5.5-.4 8.3-.4h42c3.9-15.3 6-31.4 6-48C384 86 298 0 192 0S0 86 0 192c0 51.2 20 97.7 52.7 132.1C76.3 349 96 379.4 96 413.7V432c0 44.2 35.8 80 80 80h32c14.4 0 27.9-3.8 39.6-10.5-4.9-11.5-7.6-24.2-7.6-37.5v-80h-99.2c-8.4-39-32-70.5-53.3-92.9C63 265.2 48 230.4 48 192c0-79.5 64.5-144 144-144s144 64.5 144 144m-192-8c0-22.1 17.9-40 40-40 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88 39.4-88 88 0 13.3 10.7 24 24 24s24-10.7 24-24m384 104H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h40l43.2 57.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L488 512h40c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48"})
  );
}

export default LanLightbulbMessageRegular;
