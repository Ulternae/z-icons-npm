import React from 'react';

export function LanZapRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16.014 448 544.069',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M341.2-12.1c9.1 6 13 17.3 9.6 27.6L292 192h120.9c19.4 0 35.1 15.7 35.1 35.1 0 10-4.2 19.5-11.7 26.1L136 521.9c-8.1 7.3-20.1 8.2-29.2 2.2s-13-17.3-9.6-27.6L156 320H35.1C15.7 320 0 304.3 0 284.9c0-9.9 4.2-19.4 11.7-26.1L312-9.9c8.1-7.3 20.1-8.1 29.2-2.2M68.9 272h120.4c7.7 0 15 3.7 19.5 10s5.7 14.3 3.3 21.6l-40.8 122.3L379.1 240H258.7c-7.7 0-15-3.7-19.5-10s-5.7-14.3-3.3-21.6l40.8-122.3z"})
  );
}

export default LanZapRegular;
